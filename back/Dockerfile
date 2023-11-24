FROM gradle:7.4.0-jdk17-alpine AS BUILD
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY . $APP_HOME
RUN gradle build -x test

FROM openjdk:17-jdk-alpine
RUN apk add --no-cache fontconfig ttf-dejavu
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY --from=BUILD $APP_HOME  .
ENTRYPOINT ["java","-jar","build/libs/hack-ai.jar"]