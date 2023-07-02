FROM node:lts-alpine
WORKDIR /user/app
COPY package*.json ./
RUN npm install
RUN npm install --save-dev ts-node nodemon
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["node", "dist/index.js"]
