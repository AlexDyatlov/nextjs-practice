FROM node:20-alpine3.19

ENV NEXT_TELEMETRY_DISABLED 1

RUN apk update && apk upgrade

WORKDIR /app

COPY . /app/

RUN yarn --production=false && yarn build

EXPOSE 3000

CMD ["yarn", "start"]