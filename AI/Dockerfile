FROM python:3.9.16
# RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo && pip3 install wget && pip3 install pip
#  RUN adduser --disabled-password --gecos "" user  \
#    && echo 'user:user' | chpasswd \
#    && adduser user sudo \
#    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
RUN python3 -m venv venv
WORKDIR /usr/app/venv/bin
COPY /object /usr/app/venv
RUN sudo chmod 777 /usr/app/venv/bin/activate 
RUN . /usr/app/venv/bin/activate \
    && git clone https://github.com/tensorflow/models.git \
    && cd /usr/app/venv/bin/models/research \
    && cp object_detection/packages/tf2/setup.py . \
    && python3 -m pip install . \
    && wget https://repo1.maven.org/maven2/com/google/protobuf/protoc/3.1.0/protoc-3.1.0-linux-x86_64.exe \
    && sudo chmod 777 ./protoc-3.1.0-linux-x86_64.exe \
    && ./protoc-3.1.0-linux-x86_64.exe object_detection/protos/*.proto --python_out=. \
    && ls /usr/app/venv/Lib/site-packages
WORKDIR /usr/app/venv/Lib/site-packages
RUN ls
EXPOSE 8083
CMD ["python3", "main.py"]
