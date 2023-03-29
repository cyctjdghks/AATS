FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN ./AI/object/scripts activate
EXPOSE 8083
ENTRYPOINT  ["python3"]
CMD ["main.py"]
