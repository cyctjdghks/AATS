FROM python:3.9.16
# RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
#  RUN adduser --disabled-password --gecos "" user  \
#    && echo 'user:user' | chpasswd \
#    && adduser user sudo \
#    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
RUN python3 -m venv venv
COPY ./Main .
WORKDIR /usr/app/venv/bin
RUN ls
COPY ./object ./usr/app/venv
RUN pip install requests
RUN pip list
RUN sudo chmod 777 /usr/app/venv/bin/activate 
RUN . /usr/app/venv/bin/activate \
    && pip list \
    && deactivate
RUN pip list
EXPOSE 8083
WORKDIR /usr/app
CMD ["python3", "main.py"]
