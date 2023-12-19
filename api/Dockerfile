FROM node:18.17.0-alpine

WORKDIR /

ENV DOCKERIZE_VERSION v0.7.0
RUN apk add --no-cache bash
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY . .

EXPOSE 3003

ENTRYPOINT ["dockerize", "-wait", "tcp://db:3306", "-timeout", "20s" ]

RUN npm install

CMD ["node", "src/server"]


