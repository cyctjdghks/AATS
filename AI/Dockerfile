FROM python:3.9.16
RUN pip install --upgrade pip
WORKDIR /usr/app
COPY . .
RUN ls
RUN python3 -m venv venv
RUN cd object
RUN Scripts/activate.bat
EXPOSE 8083
CMD ["python3", "main.py"]
