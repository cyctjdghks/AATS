FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN pwd
RUN ls
RUN cd ./AI/object/Scripts
RUN activate object
EXPOSE 8083
CMD ["python3", "main.py"]
