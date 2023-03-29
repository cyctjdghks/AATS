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
RUN ls
COPY ./Main .
RUN pip install requests
RUN pip list
RUN sudo chmod 777 /usr/app/venv/bin/activate
RUN . /usr/app/venv/bin/activate
RUN pip list
EXPOSE 8083
CMD ["echo", "hi"]
