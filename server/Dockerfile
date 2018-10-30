FROM node:10.12.0-alpine as build-stage
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]