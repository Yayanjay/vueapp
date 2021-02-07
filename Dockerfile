FROM node:latest

RUN mkdir -p /usr/cafeapp

WORKDIR /usr/cafeapp

COPY package*.json ./

COPY . .

RUN yarn install

EXPOSE 8080

CMD [ "node", "index.js" ]