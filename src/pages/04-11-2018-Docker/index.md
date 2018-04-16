---
path: "/docker"
date: "2018-04-11T17:12:33.962Z"
title: "Using Docker"
---

![alt text](https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png "Docker")

### What is Docker and Why Use It?

Docker is the leading platform for developing, running and deploying applications within containers. A naive way of explaining a container is to refer to it as a wrapper for a piece of software. It isolates the software from its surroundings while packaging any code, runtimes, system tools, libraries and settings needed to run. Some benefits of containers are:

* Flexible: Even the most complex applications can be containerized.
* Lightweight: Containers leverage and share the host kernel.
* Interchangeable: You can deploy updates and upgrades on-the-fly.
* Portable: You can build locally, deploy to the cloud, and run anywhere.
* Scalable: You can increase and automatically distribute container replicas.
* Stackable: You can stack services vertically and on-the-fly.

### What Does This Mean in The Real World?

Two big practical uses for containers are:

* Prepackaged environments for developers. With Docker developers no longer has to worry about application environment setup. Prepackaged images can be made for developer, staging and production enviroments with everything preconfigured. This means no more "It works on my machine errors"!

* Containers are easy to work in from a deployment standpoint. For devops, platform engineers and sysadmins it means deployed environments are easier to manage. Containers offer flexibility since there is reduced coupling between the enviroment and software itself. You can quickly and easily deploy upgrades and newer versions of software and fix problems with deployments.

### Installing Docker

To install Docker download the .dmg file by runnin the following command `brew cask install docker` or by clicking on the following [link](https://download.docker.com/mac/stable/Docker.dmg). Then run the file and give Docker permission to run.

To verify if you have Docker running properly run `docker version`.

#### The Contents of the Container

Now lets create the contents of your first image. First create a new directory for your project and navigate to it. Inside the directory create the following `server.js` file.

```
// server.js

// DEPENDENCIES AND SETUP
// ===============================================

var express = require('express'),
  app = express(),
  port = Number(5555);

var five = require('five'); // a useless library

// ROUTES
// ===============================================

// An arbitrary route to grab resources
app.get('/', function(req, res) {
  res.send(`${five()}`);
});

// START THE SERVER
// ===============================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
```

Also the following `package.json` file.

```
{
  "name": "five-server",
  "version": "5.5.5",
  "description": "High Five!",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.3",
    "five": "^0.8.0"
  }
}
```

#### Creating a Dockerfile and .dockerignore file

To create an image and run this server as a container using Docker create the following `Dockerfile`. The `Dockerfile` provides a set of command line instructions that will run when the image is being built.

```
# Pull from an existing image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

```

Also create the following `.dockerignore` file. All files and directories specified in the `.dockerignore` file will not be included when building the image.

```
**/node_modules
```

#### Building and Running the Image as a Container

Run the following command to build the image.

```
$ docker build -t five-server .
```

This command will list the images stored in your Docker registry.

```
$ docker image ls
```

You should see the following images in your directory.

```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
five-server         latest              ab5578b1699d        20 seconds ago      676MB
node               latest              aa3e171e4e95        7 days ago          673MB
```

Now finally to run the image as a container. Note that this will map port 5555 within the container to port 8080 on your localhost.

```
$ docker run -p 5555:8080 five-server
```

If you access localhost:8080 and recieve the payload '5' then congratulations, you have successfully created and run your first Docker container!
