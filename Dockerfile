# FROM node:latest
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install -g npm@8.18.0
# COPY . .
# EXPOSE 3000
# CMD [ "npm" , "start"]

# FROM node:18
# ENV NODE_ENV=production

# WORKDIR /app

# COPY package*.json /app/

# RUN npm install --production

# COPY . .
# RUN npm run build

# EXPOSE 3000
# CMD ["npm" , "start"]

# FROM node:lts-alpine

# ENV NODE_ENV=production

# RUN mkdir /app

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json /app/package.json

# RUN npm install --silent

# RUN npm install react-scripts -g --silent

# RUN npm run build

# COPY . /app

# RUN npm install -g serve

# EXPOSE 3000

# CMD ["serve", "-s", "build"]

### STAGE 1: Build ###
FROM node:18 as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.23.3-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]