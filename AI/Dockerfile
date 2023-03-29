FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN pwd
RUN ls
RUN cd object/Scripts
RUN source activate object
EXPOSE 8083
CMD ["python3", "main.py"]
