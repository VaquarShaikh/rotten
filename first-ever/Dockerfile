FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080
ENV REDIS_HOST=my-redis
ENV REDIS_PORT=6379

EXPOSE 8080

CMD [ "npm","start" ]