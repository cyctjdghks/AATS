FROM python:3.9.16
RUN pip3 install --upgrade pip3
WORKDIR /usr/app
COPY . .
RUN python3 -m venv object
RUN cd object/Scripts
RUN activate
EXPOSE 8083
CMD ["python3", "main.py"]
