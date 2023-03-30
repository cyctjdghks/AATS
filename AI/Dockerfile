FROM python:3.9.16
WORKDIR /usr/app
COPY . .

# 필요한 패키지를 설치합니다.
RUN pip install virtualenv

# 가상환경을 생성합니다.
RUN virtualenv -p python3.9 venv

# 가상환경을 활성화합니다.
RUN . venv/bin/activate && \
    pwd
    



# 컨테이너 실행시 실행될 명령어 설정
CMD [ "python", "main.py" ]
