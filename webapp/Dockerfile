##STAGE 1: Building Angular Application##
FROM node:8 as builder
COPY . /webapp
WORKDIR /webapp
RUN npm install
RUN $(npm bin)/ng build
 
## STAGE 2: Run nginx to serve Application##
FROM nginx:1.11-alpine
COPY --from=builder /webapp/dist/* /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]