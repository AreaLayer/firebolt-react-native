# Stage 1: Install Gradle (Base)
FROM ubuntu:24.04 AS gradle-base

# Install necessary tools and Gradle
RUN apt-get update && \
    apt-get install -y wget unzip && \
    wget https://services.gradle.org/distributions/gradle-7.4.2-bin.zip -P /tmp && \
    unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip && \
    rm /tmp/gradle-7.4.2-bin.zip

# Add Gradle to PATH
ENV PATH=/opt/gradle/gradle-7.4.2/bin:$PATH

# Stage 2: Kotlin Build
FROM openjdk:21-slim AS kotlin-build

# Copy Gradle installation from base stage
COPY --from=gradle-base /opt/gradle /opt/gradle
ENV PATH=/opt/gradle/gradle-7.4.2/bin:$PATH

# Set up Kotlin app build environment
WORKDIR /app

# Copy necessary build files and app sources
COPY gradlew /app/gradlew
COPY gradle /app/gradle
COPY . /app

# Ensure gradlew is executable and build the Kotlin app
RUN chmod +x ./gradlew && ./gradlew build

# Stage 3: Swift Build
FROM swift:6.1 AS swift-build

# Copy Gradle installation from base stage
COPY --from=gradle-base /opt/gradle /opt/gradle
ENV PATH=/opt/gradle/gradle-7.4.2/bin:$PATH

# Set up Swift app build environment
WORKDIR /app

# Copy app sources for Swift
COPY . /app

# Build the Swift app
RUN ./gradlew build

# Stage 4: Combine Artifacts
FROM ubuntu:24.04 AS final

# Copy Kotlin build artifacts
COPY --from=kotlin-build /app/build /final/kotlin

# Copy Swift build artifacts
COPY --from=swift-build /app/build /final/swift

# Set the working directory and default command
WORKDIR /final
CMD ["bash"]
