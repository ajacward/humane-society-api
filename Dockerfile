From node:lts-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY dist .

EXPOSE 8080

USER node

CMD ["node", "dist/index.js"]
