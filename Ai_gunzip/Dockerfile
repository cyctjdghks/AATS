FROM python:3.9.16
WORKDIR /usr/app
COPY . .




RUN apt-get update && apt-get install -y \
    protobuf-compiler \
    && rm -rf /var/lib/apt/lists/*
# 가상환경을 활성화합니다.
RUN pip install flask && \
    pip uninstall -y opencv-python && \
    pip install opencv-python && \
    pip install flask-cors && \
    pip install flask-socketio==5.1.1 && \
	pip install numpy && \
	pip install base64 && \
    apt-get update && \
    apt-get install -y libgl1 && \
    pwd && \
    ls
    

EXPOSE 8084

# 컨테이너 실행시 실행될 명령어 설정
CMD [ "python", "people_counting.py" ]
