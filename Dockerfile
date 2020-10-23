FROM node:6

RUN mkdir -p /app
WORKDIR /app

ADD . /app
RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]
