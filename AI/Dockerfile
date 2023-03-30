FROM python:3.9.16

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    git \
    protobuf-compiler \
    && rm -rf /var/lib/apt/lists/*

# TensorFlow Object Detection API 설치
RUN git clone https://github.com/tensorflow/models.git /tmp/models && \
    cd /tmp/models/research && \
    protoc object_detection/protos/*.proto --python_out=. && \
    cp object_detection/packages/tf2/setup.py . && \
    python -m pip install --no-cache-dir . && \
    pip install flask && \
    pwd

# 작업 디렉토리 생성
RUN mkdir /app
WORKDIR /app


# 애플리케이션 코드 복사
COPY  app.py/app

RUN find / -name "tmp"

WORKDIR /tmp/models/research

# 컨테이너 실행시 실행될 명령어 설정
CMD [ "python", "app.py" ]
