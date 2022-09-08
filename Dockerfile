FROM node:alpine

RUN apk update

WORKDIR /opt/ali-express/

COPY package.json .

RUN npm install

COPY . .

CMD ["/bin/sh", "start.sh"]

