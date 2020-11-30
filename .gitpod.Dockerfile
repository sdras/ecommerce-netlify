FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
# create destination directory
#RUN mkdir -p /usr/src/nuxt-app
#WORKDIR /usr/src/nuxt-app

# update and install dependency
#RUN apt-get update && apt-get upgrade
#RUN apk add git

# copy the app, note .dockerignore
#COPY . /usr/src/nuxt-app/
#RUN npm install
#RUN npm run build

#EXPOSE 3000

#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=3000

#CMD [ "npm", "start" ]
