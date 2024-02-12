# FROM node:12.18.1
FROM node:10-alpine
WORKDIR /app 
# COPY everything from your local directory to /app folder
COPY . .
RUN npm install
CMD [ "node", "app.js" ]