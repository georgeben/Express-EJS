FROM node:12-stretch

USER node

RUN mkdir /home/node/express-docker

WORKDIR /home/node/express-docker

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD [ "npm", "start" ]