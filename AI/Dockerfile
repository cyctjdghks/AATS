# 베이스 이미지로 파이썬 3.9-slim-buster 사용
FROM python:3.9-slim-buster

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
RUN pip3 list 


# 소스 코드 복사
COPY . .

# 컨테이너 실행 시 실행될 명령어 설정
CMD ["python3", "app.py"]
