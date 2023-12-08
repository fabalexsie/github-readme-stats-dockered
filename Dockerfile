FROM node:slim

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm i express

COPY . /app

CMD ["node", "express.js"]