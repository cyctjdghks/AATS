from flask import Flask, render_template, Response
import cv2
import numpy as np
import tensorflow as tf
from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as viz_utils
from flask_cors import CORS
import pymysql

# MariaDB connection 정보 입력
host = 'j8d102.p.ssafy.io'
port = 3306
user = 'root'
password = 'wjdtlsdjqtwh102'
database = 'd102'

# MariaDB 연결
conn = pymysql.connect(
    host=host,
    port=port,
    user=user,
    password=password,
    database=database
)

# Connection이 잘 되었는지 확인
if conn:
    print("MariaDB에 접속되었습니다.")
else:
    print("MariaDB에 접속할 수 없습니다.")

app = Flask(__name__)

CORS(app)  # 모든

PATH_TO_SAVED_MODEL = "saved_model"
category_index = label_map_util.create_category_index_from_labelmap("label_map.pbtxt",
                                                                    use_display_name=True)
detect_fn = tf.saved_model.load(PATH_TO_SAVED_MODEL)


def generate_frames():
    cap = cv2.VideoCapture(0)
    cap_IP = cv2.VideoCapture("rtsp://rkdahgus12:qmffpdlem!2@192.168.230.68:554/stream1")
    while True:
        success, frame = cap.read()
        success_IP, frame_IP = cap_IP.read()
        if not success and success_IP:
            break
        else:
            image_np = np.array(frame)
            image_np_IP=np.array(frame_IP)
            # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
            input_tensor = tf.convert_to_tensor(image_np)
            input_tensor_IP = tf.convert_to_tensor(image_np_IP)
            # The model expects a batch of images, so add an axis with `tf.newaxis`.
            input_tensor = input_tensor[tf.newaxis, ...]
            input_tensor_IP=input_tensor[tf.newaxis, ...]

            # Perform the detection on the current image
            detections = detect_fn(input_tensor)
            num_detections = int(detections.pop('num_detections'))

            # Convert the detection results to a dictionary of numpy arrays
            detections = {key: value[0, :num_detections].numpy() for key, value in detections.items()}

            # detection_classes should be ints.
            detections['detection_classes'] = detections['detection_classes'].astype(np.int64)

            label_id_offset = 0
            image_np_with_detections = image_np.copy()

            viz_utils.visualize_boxes_and_labels_on_image_array(
                image_np_with_detections,
                detections['detection_boxes'],
                detections['detection_classes'] + label_id_offset,
                detections['detection_scores'],
                category_index,
                use_normalized_coordinates=True,
                min_score_thresh=.8,
                agnostic_mode=False)
            # get the detected objects and their scores
            # Print the name of objects with score >= 0.8
            for i, score in enumerate(detections['detection_scores']):
                if score >= 0.8:
                    class_id = int(detections['detection_classes'][i])
                    class_name = category_index[class_id]['name']
                    print("Detected object with score >= 0.8: {} SCORE: {}".format(class_name.split('_')[0], score))
                    ################################## SQL ##################################
                    if class_name.split('_')[1] == 'user':
                        cursor = conn.cursor()
                        sql = "UPDATE user SET user_status = %s WHERE user_id = %s"
                        val = (1, class_name.split('_')[0])
                        cursor.execute(sql, val)
                        cursor.execute("INSERT INTO user_attendance_start (user_id) VALUES (?)",
                                       (class_name.split('_')[0]))

                        conn.commit()
                    elif class_name.split('_')[1] == 'worker':
                        cursor = conn.cursor()
                        sql = "UPDATE worker SET worker_status = %s WHERE worker_id = %s"
                        val = (1, class_name.split('_')[0])
                        cursor.execute(sql, val)
                        cursor.execute("INSERT INTO worker_attendance_start (user_id) VALUES (?)",
                                       (class_name.split('_')[0]))

                        conn.commit()
                    ################################## END ##################################

            ret, buffer = cv2.imencode('.jpg', image_np_with_detections)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(debug=True)
