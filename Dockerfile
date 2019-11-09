# // What image do you want to start building on?
FROM node:latest
# // Make a folder in your image where your app’s source code can live
# RUN mkdir -p /src/app
# // Tell your container where your app’s source code will live
WORKDIR /src/app
# // What source code do you what to copy, and where to put it?
# COPY . /src/app
COPY package.json .
# // Does your app have any dependencies that should be installed?
RUN npm install
COPY . .
# RUN npm run db:setup
# // What port will the container talk to the outside world with once created?
# (make sure this matches the port that your express server listening)
EXPOSE 3008
# // How do you start your app?
CMD npm run server
