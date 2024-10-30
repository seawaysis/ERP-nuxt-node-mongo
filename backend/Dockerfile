FROM node:23-alpine3.19

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

#change theme posgesSQL : File >> preference >theme
#docker ps -> docker inspect [container_id] : find ip_address//172.21.0.2

#register server postgresql Register->Servers 
#npm install typescript ts-node @types/node --save-dev

#npx tsc --init
#npx prisma init --datasource-provider postgresql

#go to .env config DATABASE_URL