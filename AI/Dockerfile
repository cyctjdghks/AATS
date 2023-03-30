FROM python:3.9.16
WORKDIR /usr/app
COPY . .

# 필요한 패키지를 설치합니다.
RUN pip install virtualenv

# 가상환경을 생성합니다.
RUN virtualenv -p python3.9 venv

RUN apt-get update && apt-get install -y \
    protobuf-compiler \
# 가상환경을 활성화합니다.
RUN . venv/bin/activate && \
    git clone https://github.com/tensorflow/models.git && \
    cd /tmp/models/research && \
    protoc object_detection/protos/*.proto --python_out=. && \
    cp object_detection/packages/tf2/setup.py . && \
    python -m pip install --no-cache-dir . && \
    pip install flask && \
    pwd && \
    ls
    



# 컨테이너 실행시 실행될 명령어 설정
CMD [ "python", "main.py" ]
