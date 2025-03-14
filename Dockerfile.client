# syntax=docker/dockerfile:1
FROM node:iron-alpine
WORKDIR /app
COPY ./client/package.json .
COPY ./yarn.lock .
RUN yarn install
EXPOSE 5173
CMD ["yarn", "dev", "--host"]