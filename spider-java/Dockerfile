FROM maven:3.6.3-jdk-11
WORKDIR /app
COPY pom.xml ./
RUN mvn install
RUN mvn --version
COPY . .
RUN javac -d src/main/classes src/main/code/Main.java
CMD java -cp src/main/classes Main