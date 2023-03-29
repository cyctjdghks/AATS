FROM python:3.9.16
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y sudo
RUN adduser --disabled-password --gecos "" user  \
    && echo 'user:user' | chpasswd \
    && adduser user sudo \
    && echo 'user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /usr/app
RUN echo "11111111111 /usr/app"
RUN ls
RUN python3 -m venv venv
RUN echo "2222222 /usr/app"
RUN ls
WORKDIR /usr/app/venv/bin
RUN echo "444444444 /usr/app/venv/bin"
RUN ls
WORKDIR /usr/app/venv
RUN echo "3333333333 /usr/app/venv"
RUN ls
# COPY ./object/Scripts ./bin
COPY ./Main .
RUN pip list
RUN sudo chmod 777 /usr/app/venv/bin/activate
RUN /usr/app/venv/bin/activate
RUN pip install requests
RUN pip list
RUN ls
WORKDIR /user/app/venv/bin
RUN ls
WORKDIR /user/app/venv/lib
RUN ls
WORKDIR /user/app/venv/lib64
RUN ls
WORKDIR /user/app/venv/include
RUN ls
RUN /usr/app/venv/bin/deactivate
RUN pip list
RUn ls
EXPOSE 8083
CMD ["python3", "main.py"]
