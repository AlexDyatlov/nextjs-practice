FROM node:20-alpine3.19

ARG PORT=3042

ENV PORT=$PORT

WORKDIR /app

CMD tail -f /dev/null