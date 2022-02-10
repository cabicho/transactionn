FROM node:14.15.4-alpine3.12

RUN npm install -g @nestjs/cli@8.0.0

RUN npm install sequelize@6.15.0 sequelize-typescript@2.1.2 sqlite3@5.0.2 @nestjs/sequelize@8.0.0 @types/sequelize --save-dev

USER node

WORKDIR /home/node/app