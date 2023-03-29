FROM python:3.9.16
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
RUN adduser --disabled-password --gecos "" user  \
    && echo 'user:user' | chpasswd \
    && adduser user sudo \
    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
COPY . .
RUN python3 -m venv venv
WORKDIR /usr/app/venv
RUN pwd
RUN ls
RUN sudo source bin/Activate.ps1
EXPOSE 8083
CMD ["python3", "main.py"]
