# Stage 1: Kotlin Build
FROM openjdk:21 AS kotlin-build

# Install necessary tools and Gradle
RUN apt-get update && \
    apt-get install -y wget unzip && \
    wget https://services.gradle.org/distributions/gradle-7.4.2-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip

# Add Gradle to PATH
ENV PATH=/opt/gradle/gradle-7.4.2/bin:$PATH

# Set up Kotlin app build environment
WORKDIR /app
COPY . /app

# Build Kotlin app
RUN ./gradlew build

# Stage 2: Swift Build
FROM swift:6.0 AS swift-build

# Install necessary tools and Gradle
RUN apt-get update && \
    apt-get install -y wget unzip && \
    wget https://services.gradle.org/distributions/gradle-7.4.2-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip

# Add Gradle to PATH
ENV PATH=/opt/gradle/gradle-7.4.2/bin:$PATH

# Set up Swift app build environment
WORKDIR /app
COPY . /app

# Build Swift app
RUN ./gradlew build

# Final Stage: Combine Artifacts
FROM ubuntu:24.04 AS final

# Copy Kotlin build artifacts
COPY --from=kotlin-build /app /final/kotlin

# Copy Swift build artifacts
COPY --from=swift-build /app /final/swift

# Set the working directory and default command
WORKDIR /final
CMD ["bash"]
