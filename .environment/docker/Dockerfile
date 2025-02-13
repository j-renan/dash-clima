FROM node:22-slim

WORKDIR /var/www/front

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN apt update -y && apt upgrade -y \
    && userdel -f node \
    && if getent group node ; then groupdel node; fi \
    && groupadd -g ${GROUP_ID} node \
    && useradd -l -u ${USER_ID} -g node node \
    && install -d -m 0775 -o node -g node /home/node

#COPY ./package*.json ./

RUN npm install -g @angular/cli@19 @angular-devkit/build-angular@19
#RUN npm install --legacy-peer-deps

COPY . .

USER node

EXPOSE 4222

CMD ["ng", "serve", "--host", "0.0.0.0"]
