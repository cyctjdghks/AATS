FROM python:3.9.16
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
RUN adduser --disabled-password --gecos "" user  \
    && echo 'user:user' | chpasswd \
    && adduser user sudo \
    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
COPY . .
RUN python3 -m venv object
WORKDIR /usr/app/object
RUN pwd
RUN ls
RUN sudo chmod 777 /usr/app/object/Script/activate
RUN /usr/app/object/Script/activate
RUn ls
COPY . .
EXPOSE 8083
CMD ["python3", "main.py"]
