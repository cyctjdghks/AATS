FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 8083
ENTRYPOINT  ["python3"]
CMD ["main.py"]
