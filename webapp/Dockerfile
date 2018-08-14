FROM nginx:1.11-alpine
COPY ./dist/webapp /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]