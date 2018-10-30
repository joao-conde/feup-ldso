FROM node:8.10.0-alpine as build-stage
WORKDIR /usr/src/app

# Uncomment line below with your host local ip address
# if Expo picks up a different address
# ENV REACT_NATIVE_PACKAGER_HOSTNAME= <your-local-ip-address>

# Copy package and package-lock files
COPY package*.json ./

# Instal dependencies
RUN yarn
RUN yarn global add expo-cli

# Copy files to container
COPY . .

RUN apk add --no-cache bash
