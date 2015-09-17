FROM node:0.12.7-slim

WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD ["/app/bin/hubot", "--adapter", "slack"]
