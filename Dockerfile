# Usage:
#
#    Build image:
#    docker build -t angular-starter .
#
#    Run image (on localhost:8080):
#    docker run --name angular-starter -p 8080:80 angular-starter
#
#    Run image as virtual host (read more: https://github.com/jwilder/nginx-proxy):
#    docker run -e VIRTUAL_HOST=angular-starter.your-domain.com --name angular-starter angular-starter

# Stage 1, based on Node.js, to build and compile Angular

FROM node:12.16.3-alpine as builder

COPY package.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run build:prod

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.17.10-alpine

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY ./entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/angular-ngrx-material-starter /usr/share/nginx/html

ENTRYPOINT ["entrypoint.sh"]
