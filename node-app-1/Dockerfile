FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

# EXPOSE 3000
CMD [ "node", "app.js" ]
