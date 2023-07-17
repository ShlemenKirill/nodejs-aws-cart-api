FROM node:18-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
RUN npm install
COPY . .
EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]
