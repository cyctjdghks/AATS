import cv2
import numpy as np

net = cv2.dnn.readNet("person.weights", "person.cfg")

classes = []
with open("person.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]

# 객체 감지를 위한 최소 확률과 최소 경계 상자 설정
conf_threshold = 0.5
nms_threshold = 0.4

# 웹캠에서 비디오 스트림 읽기
cap = cv2.VideoCapture(2)

while True:
    # 비디오 스트림에서 프레임 읽기
    ret, frame = cap.read()

    # 프레임을 네트워크 입력으로 변환
    blob = cv2.dnn.blobFromImage(frame, 1 / 255, (416, 416), swapRB=True, crop=False)

    # YOLOv3 모델을 통해 객체 감지
    net.setInput(blob)
    outs = net.forward(net.getUnconnectedOutLayersNames())

    # 감지된 객체의 좌표, 클래스 ID, 확률 추출
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

    # 비최대 억제(NMS)를 사용하여 중복된 경계 상자 제거
    indices = cv2.dnn.NMSBoxes(boxes, confidences, conf_threshold, nms_threshold)

    # 경계 상자 그리기
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
                cv2.putText(frame, label + ' ' + str(round(confidence, 2)), (x, y + 20), font, 1, (255, 51, 102), 2)

        # 화면에 객체 갯수 출력
        cv2.putText(frame, "People count: {}".format(people_count), (10, 50), font, 2, (0, 255, 0), 2)
    # 결과 출력
    cv2.imshow("Person", frame)

    # 종료 조건
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
