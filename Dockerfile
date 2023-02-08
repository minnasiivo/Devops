FROM nginx:1.23.3


WORKDIR /app
COPY . .
RUN yarn install --production




COPY ./dist/angular-example-app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

 EXPOSE 80
 ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM nginx:1.23.3











