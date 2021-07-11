FROM node:16-alpine

RUN mkdir /sam-node

WORKDIR /sam-node

COPY package*.json /sam-node

ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV NODE_PATH=/sam-node/src

COPY . .

RUN npm ci --production



CMD [ "node", "src/server.js" ]