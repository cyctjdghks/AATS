FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN cd ./AI/object/scripts
RUN activate object
EXPOSE 8083
CMD ["python3", "main.py"]
