FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install --no-audit --no-fund --legacy-peer-deps

COPY . .

RUN mkdir -p uploads logs

EXPOSE 5000

CMD ["node", "server.js"]