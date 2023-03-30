FROM python:3.9.16

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# 작업 디렉토리 생성
RUN mkdir /app
WORKDIR /app


# 애플리케이션 코드 복사
COPY . /app

# 컨테이너 실행시 실행될 명령어 설정
CMD [ "python", "./app.py" ]
