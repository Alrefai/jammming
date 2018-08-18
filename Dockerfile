FROM node:alpine

ARG CI
ARG REACT_APP_SPOTIFY_CLIENT_ID
ARG REACT_APP_DOMAIN

WORKDIR /usr/src

COPY yarn.lock package.json ./
RUN yarn
COPY . .

RUN yarn build && mv build /public

USER node
