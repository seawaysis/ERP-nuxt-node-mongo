FROM node:22-alpine3.19

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# command to run the app
CMD [ "npm", "run", "dev" ]

#docker build -t [image name] [path] 
#=> docker build -t frontend .
#docker run --name [container name] -p [port use]:[port in docker] [image name]
#=> docker run --name frontend -p 3000:3000 frontend