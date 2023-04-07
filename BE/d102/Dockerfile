FROM adoptopenjdk/openjdk11
WORKDIR /usr/app
COPY build/libs/d102-0.0.1-d102.jar d102.jar
EXPOSE 8082
CMD ["java", "-jar", "d102.jar"]