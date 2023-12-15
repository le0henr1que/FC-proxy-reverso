FROM node:18.17.0-alpine

WORKDIR /usr/src/app 

ENV DOCKERIZE_VERSION v0.7.0
RUN apk add --no-cache bash
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

EXPOSE 3003

CMD ["node", "src/server"]