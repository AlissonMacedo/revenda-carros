FROM node:18-alpine AS base

RUN apk add --no-cache openssl

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install
COPY --chown=node:node . .
RUN npx prisma generate
RUN npm run build
RUN npx prisma generate

FROM base AS test
ENTRYPOINT ["npm", "test" ]

FROM base AS runtime

USER node
EXPOSE 8080

CMD ["npm", "run", "start"]
