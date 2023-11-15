FROM node:20-slim

# Set the working directory.
WORKDIR /workdir

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "src/app.js"]

