# cek versi nodejs di file package.json
FROM node:lts-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# RUN npm install
RUN npm install --legacy-peer-deps
COPY . /app
RUN npx quasar build

# production environment
FROM nginx:stable-alpine as production-build
COPY --from=build /app/dist/spa /usr/share/nginx/html
# COPY dist/spa /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 2000
CMD ["nginx", "-g", "daemon off;"]