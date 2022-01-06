# Layer 1: Node image for building the application
FROM node:17-alpine AS builder
WORKDIR /app
COPY ./package.json .
RUN yarn install
COPY . .
RUN yarn build

# Layer 2: Nginx image for serving the website
FROM nginx:1.21.4-alpine
# TODO: I'm not sure if this serving location is standard convention
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./*
COPY --from=builder /app/build .
# TODO: These entrypoint arguments may also be nonstandard
ENTRYPOINT ["nginx", "-g", "daemon off;"]
