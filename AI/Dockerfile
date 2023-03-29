FROM python:3.9.16
# RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
#  RUN adduser --disabled-password --gecos "" user  \
#    && echo 'user:user' | chpasswd \
#    && adduser user sudo \
#    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
RUN python3 -m venv venv
WORKDIR /usr/app/venv/bin
COPY /object /usr/app/venv
RUN ls
RUN sudo chmod 777 /usr/app/venv/bin/activate 
RUN . /usr/app/venv/bin/activate \
    && deactivate
WORKDIR /usr/app/venv/Lib/site-packages
RUN python3 main.py
EXPOSE 8083
CMD ["python3", "main.py"]
