FROM node:latest AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN apk add --no-cache gettext
COPY nginx-entrypoint.sh /
COPY --from=build /app/build ./
COPY --from=build /app/src/inject.template.js ./
ENTRYPOINT [ "sh", "/nginx-entrypoint.sh" ]