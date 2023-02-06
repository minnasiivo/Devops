FROM nginx:1.23.3

#COPY ./dist/angular-example-app /usr/share/nginx/html
COPY /usr/src/app/dist/angular-example-app /usr/share/nginx/html
 COPY nginx.conf /etc/nginx/nginx.conf

 EXPOSE 80
 ENTRYPOINT ["nginx", "-g", "daemon off;"]



#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build
# Stage 2: Run
#FROM nginx:1.17.1-alpine
# Copy compiled files from previous build stage
#COPY --from=build /usr/src/app/dist/angular-tour-of-heroes /usr/share/nginx/html



