# Create image based on the official Node image from dockerhub
FROM node:12.2.0

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy dependency definitions
COPY package.json /usr/src/app/package.json

# Install dependecies
RUN npm install
RUN npm install -g @angular/cli@8.3.0

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]