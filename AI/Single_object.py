import numpy as np
import glob
from PIL import Image
import tensorflow as tf


def load_image_into_numpy_array(image):
    (im_width, im_height) = image.size
    return np.array(image.getdata()).reshape((im_height, im_width, 3)).astype(np.uint8)


# 이미지 파일명 리스트
image_files = glob.glob("images/*.JPG")

# 이미지 변환 및 텐서 생성
image_tensors = []
for file in image_files:
    image = Image.open(file)
    image_np = load_image_into_numpy_array(image)
    image_tensors.append(tf.convert_to_tensor(image_np))

# 모델 입력값으로 사용할 배치 텐서 생성
input_tensor = tf.convert_to_tensor(np.array(image_tensors))
# SavedModel 로드
model = tf.saved_model.load('saved_model')

# 모델 추론
detections = model(input_tensor)
