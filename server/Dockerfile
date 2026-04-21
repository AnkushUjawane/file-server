FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9

RUN npm cache clean --force && npm install

COPY . .

RUN mkdir -p uploads logs

EXPOSE 5000

CMD ["node", "server.js"]