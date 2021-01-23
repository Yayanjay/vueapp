FROM node:latest

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN yarn install

EXPOSE 8080

CMD [ "node", "index.js" ]