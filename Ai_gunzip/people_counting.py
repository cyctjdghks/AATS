import cv2
import numpy as np
from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import base64
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# YOLO 모델 초기화


net = cv2.dnn.readNet("person.weights", "person.cfg")

classes = []
with open("person.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]

conf_threshold = 0.5
nms_threshold = 0.4


# 웹캠으로부터 프레임 읽기


# 비동기적으로 이미지 프레임 처리
@socketio.event
def detect_objects(camera_id):
    cap = cv2.VideoCapture("rtsp://rkdahgus12:qmffpdlem!2@192.168.230.68:554/stream1")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        else:
            blob = cv2.dnn.blobFromImage(frame, 1 / 255, (416, 416), swapRB=True, crop=False)

            net.setInput(blob)
            outs = net.forward(net.getUnconnectedOutLayersNames())

            class_ids = []
            confidences = []
            boxes = []
            for out in outs:
                for detection in out:
                    scores = detection[5:]
                    class_id = np.argmax(scores)
                    confidence = scores[class_id]
                    if confidence > conf_threshold:
                        center_x = int(detection[0] * frame.shape[1])
                        center_y = int(detection[1] * frame.shape[0])
                        w = int(detection[2] * frame.shape[1])
                        h = int(detection[3] * frame.shape[0])
                        x = center_x - w // 2
                        y = center_y - h // 2
                        class_ids.append(class_id)
                        confidences.append(float(confidence))
                        boxes.append([x, y, w, h])

            indices = cv2.dnn.NMSBoxes(boxes, confidences, conf_threshold, nms_threshold)

            font = cv2.FONT_HERSHEY_PLAIN
            colors = np.random.uniform(0, 255, size=(len(classes), 3))
            people_count = 0
            if len(indices) > 0:
                for i in indices.flatten():
                    x, y, w, h = boxes[i]
                    label = str(classes[class_ids[i]])
                    confidence = confidences[i]

                    if classes[class_ids[i]] == 'person':
                        people_count += 1
                        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 204), 2)
                        cv2.putText(frame, label + ' ' + str(round(confidence, 2)), (x, y + 20), font, 1,
                                    (255, 51, 102), 2)

                cv2.putText(frame, "People count: {}".format(people_count), (10, 50), font, 2, (0, 255, 0), 2)

            ret, buffer = cv2.imencode('.jpg', frame)
            jpg_as_text = base64.b64encode(buffer).decode('utf-8')
            socketio.emit('image' + str(camera_id), jpg_as_text)
            socketio.emit('people_count', {'count': people_count})
            socketio.sleep(0.01)
    cap.release()


@app.route('/gunzip/peoplecounting')
def counting():
    return render_template('peopleCounting.html')


@socketio.on('connect')
def on_connect():
    socketio.start_background_task(detect_objects, 2)



if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8084)
