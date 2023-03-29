FROM python:3.9.16
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
RUN adduser --disabled-password --gecos "" user  \
    && echo 'user:user' | chpasswd \
    && adduser user sudo \
    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
RUN python3 -m venv venv
WORKDIR /usr/app/venv
RUN pwd
RUN ls
COPY ./object/Scripts ./vin
COPY ./Main .
RUN pip list
RUN sudo chmod 777 /usr/app/venv/bin/activate
RUN . /usr/app/venv/bin/activate
RUN pip install requests
RUN pip list
RUN . /usr/app/venv/bin/deactivate
RUN pip list
RUn ls
EXPOSE 8083
CMD ["python3", "main.py"]
