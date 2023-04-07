import cv2
import numpy as np
import tensorflow as tf
from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as viz_utils

PATH_TO_SAVED_MODEL = "inference_graph/saved_model"
category_index = label_map_util.create_category_index_from_labelmap("label_map.pbtxt",
                                                                    use_display_name=True)
detect_fn = tf.saved_model.load(PATH_TO_SAVED_MODEL)


def generate_frames_IP_NUM1():
    cap = cv2.VideoCapture(0)
    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            image_np = np.array(frame)

            # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
            input_tensor = tf.convert_to_tensor(image_np)

            # The model expects a batch of images, so add an axis with `tf.newaxis`.
            input_tensor = input_tensor[tf.newaxis, ...]

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
                min_score_thresh=.95,
                agnostic_mode=False)
            # get the detected objects and their scores
            # Print the name of objects with score >= 0.8
            for i, score in enumerate(detections['detection_scores']):
                if score >= 0.8:
                    class_id = int(detections['detection_classes'][i])
                    class_name = category_index[class_id]['name']
                    print("Detected object with score >= 0.8: {} SCORE: {}".format(class_name.split('_')[0], score))

            ret, buffer = cv2.imencode('.jpg', image_np_with_detections)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()


def generate_frames_IP_NUM2():
    cap = cv2.VideoCapture(1)
    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            image_np = np.array(frame)

            # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
            input_tensor = tf.convert_to_tensor(image_np)

            # The model expects a batch of images, so add an axis with `tf.newaxis`.
            input_tensor = input_tensor[tf.newaxis, ...]

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
                min_score_thresh=.95,
                agnostic_mode=False)
            # get the detected objects and their scores
            # Print the name of objects with score >= 0.8
            for i, score in enumerate(detections['detection_scores']):
                if score >= 0.8:
                    class_id = int(detections['detection_classes'][i])
                    class_name = category_index[class_id]['name']
                    print("Detected object with score >= 0.8: {} SCORE: {}".format(class_name.split('_')[0], score))

            ret, buffer = cv2.imencode('.jpg', image_np_with_detections)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()


def generate_frames_IP_NUM3():
    cap = cv2.VideoCapture(2)
    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            image_np = np.array(frame)

            # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
            input_tensor = tf.convert_to_tensor(image_np)

            # The model expects a batch of images, so add an axis with `tf.newaxis`.
            input_tensor = input_tensor[tf.newaxis, ...]

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
                min_score_thresh=.95,
                agnostic_mode=False)
            # get the detected objects and their scores
            # Print the name of objects with score >= 0.8
            for i, score in enumerate(detections['detection_scores']):
                if score >= 0.8:
                    class_id = int(detections['detection_classes'][i])
                    class_name = category_index[class_id]['name']
                    print("Detected object with score >= 0.8: {} SCORE: {}".format(class_name.split('_')[0], score))

            ret, buffer = cv2.imencode('.jpg', image_np_with_detections)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()


def generate_frames_IP_NUM4():
    cap = cv2.VideoCapture(3)
    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            image_np = np.array(frame)

            # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
            input_tensor = tf.convert_to_tensor(image_np)

            # The model expects a batch of images, so add an axis with `tf.newaxis`.
            input_tensor = input_tensor[tf.newaxis, ...]

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
                min_score_thresh=.95,
                agnostic_mode=False)
            # get the detected objects and their scores
            # Print the name of objects with score >= 0.8
            for i, score in enumerate(detections['detection_scores']):
                if score >= 0.8:
                    class_id = int(detections['detection_classes'][i])
                    class_name = category_index[class_id]['name']
                    print("Detected object with score >= 0.8: {} SCORE: {}".format(class_name.split('_')[0], score))

            ret, buffer = cv2.imencode('.jpg', image_np_with_detections)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
