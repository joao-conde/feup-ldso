FROM node:8.12.0-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build