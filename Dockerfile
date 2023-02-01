#FROM nginx:1.23.3
 # COPY . /usr/share/nginx/html
#COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


#Download Node Alpine image
FROM node:12.16.1-alpine As build

#Setup the working directory
WORKDIR /usr/src/ng-app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
# RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.15.8-alpine

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/ng-app/dist/pokemon-app/ /usr/share/nginx/html

