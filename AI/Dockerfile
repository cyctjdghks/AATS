FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN ls
RUN python3 -m venv object --without-pip
RUN cd object/Scripts
RUN activate
EXPOSE 8083
CMD ["python3", "main.py"]
