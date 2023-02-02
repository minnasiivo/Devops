FROM nginx:1.23.3
# COPY dist/angular-example-app /usr/share/nginx/html
OPY --from=build /usr/src/angular-example-app/dist /usr/share/nginx/html

 COPY nginx.conf /etc/nginx/nginx.conf

 EXPOSE 80
 ENTRYPOINT ["nginx", "-g", "daemon off;"]





