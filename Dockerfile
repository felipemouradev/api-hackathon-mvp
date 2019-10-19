FROM node:8.15
COPY ./ /var/www/
WORKDIR /var/www/

RUN npm install
RUN npm install pm2 -g
RUN npm run prestart:prod
CMD ['pm2','start dist/main.js']