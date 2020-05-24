FROM node:12-stretch

USER node

RUN mkdir /home/node/express-docker

WORKDIR /home/node/express-docker

COPY --chown=node:node . .

RUN npm ci

CMD [ "npm", "start" ]