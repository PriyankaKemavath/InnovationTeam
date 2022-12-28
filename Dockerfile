FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@8.18.0
COPY . .
EXPOSE 3000
CMD [ "npm" , "start"]