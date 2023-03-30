# 베이스 이미지로 파이썬 3.9-slim-buster 사용
FROM python:3.9-slim-buster

# 작업 디렉토리 설정
WORKDIR /app

# 파이썬 가상환경 구현
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# 의존성 설치
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# TensorFlow Object Detection API 설치
RUN apt-get update && apt-get install -y git protobuf-compiler && \
    git clone https://github.com/tensorflow/models.git /app/models && \
    cd /app/models/research && \
    cp object_detection/packages/tf2/setup.py . && \
    protoc object_detection/protos/*.proto --python_out=. && \
    python -m pip install .

# 소스 코드 복사
COPY . .

# 컨테이너 실행 시 실행될 명령어 설정
CMD ["python", "app.py"]
