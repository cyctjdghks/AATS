import cv2

# initialize the video capture object
cap = cv2.VideoCapture(2)

# create the Boosting tracker object
tracker = cv2.TrackerMIL_create()

# set a bounding box to track (you can use your own method to detect the person initially)
ret, frame = cap.read()
bbox = cv2.selectROI(frame, False)
tracker.init(frame, bbox)

# loop over frames from the video stream
while True:
    # read the next frame from the video stream
    ret, frame = cap.read()
    if not ret:
        break

    # update the tracker with the new frame
    success, bbox = tracker.update(frame)

    # draw the bounding box around the tracked object
    if success:
        x, y, w, h = [int(i) for i in bbox]
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # show the frame with the bounding box
    cv2.imshow("Frame", frame)

    # exit the loop if the 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# cleanup the video capture object and close the window
cap.release()
cv2.destroyAllWindows()
