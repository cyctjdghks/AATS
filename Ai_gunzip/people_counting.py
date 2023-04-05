from flask import Flask, render_template, Response
from flask_socketio import SocketIO, emit
import cv2
import numpy as np
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


@app.route('/gunzip/peoplecounting')
def index():
    return render_template('peopleCounting.html')

@socketio.on('stream', namespace='/video')
def stream(data):
    img = base64.b64decode(data.split(',')[1])
    npimg = np.fromstring(img, dtype=np.uint8)
    frame = cv2.imdecode(npimg, 1)
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



    ret, buffer = cv2.imencode('.png', frame)
    jpg_as_text = base64.b64encode(buffer).decode('utf-8')
    socketio.emit('image' + str(1), jpg_as_text)
    socketio.emit('people_count', {'count': people_count})
    socketio.sleep(0.01)
    dataURL = 'data:image/jpeg;base64,' + jpg_as_text

    # Send the processed frame back to the client
    emit('response', {'image': dataURL})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8084)
