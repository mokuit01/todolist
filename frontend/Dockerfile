FROM node:latest AS build

WORKDIR /app
ENV BACKEND_URL ${BACKEND_URL:-http://localhost:8080}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html