Dockerfile.kotlin
FROM openjdk:11
RUN apt-get update && \
    apt-get install -y wget unzip
RUN wget https://services.gradle.org/distributions/gradle-7.4.2-bin.zip -P /tmp
RUN unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip
ENV PATH=/opt/gradle/gradle-7.4.2/bin:\$PATH
WORKDIR /app
COPY . /app
RUN ./gradlew build
