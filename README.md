node-remote
===========

This is a front end client for [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api).  
Before anything else you'll want to get the API up and running.

## Getting Started

You need to install dependencies and build the client bundle through [browserify](http://browserify.org/).

- `npm install`
- `bower install`
- `npm run build` - builds the bundle via browserify

## Running the App

You need to serve the `app/` directory - which you can do any way you want.  
For simplicity I am using [http-server](https://github.com/nodeapps/http-server).  
You can install it globally `npm i http-server -g` and then `npm start` will get you running.

If you use http-server and npm start you will be able to load [http://localhost:9000/](http://localhost:9000/).

## Basic Overview

You will have two servers running behind the scenes: 1 to serve this front end SPA and one serving the [API](https://github.com/dougflip/node-remote-api). Typically, I run the front end at [http://localhost:9000/](http://localhost:9000/) and the API at [http://localhost:9001/](http://localhost:9001/). Right now, the client is hard coded to port 9001, but the whole URL can be parameterized at somepoint.

The general concept is that this client makes AJAX requests to the API which in turn takes action on your media machine. So clicking the volume up button, for example, sends a POST request to [http://localhost:9001/system/volume](http://localhost:9001/system/volume). The end result is the volume on the system is set to the new level.

## Running Tests

Unit tests:

```
npm test
```

The e2e tests *should* work even though all of the API endpoints are going to scream 404s at you under the hood.  
I'll put in a mock backend at somepoint - which should be easy since everything returns 204's:

```
npm run e2e
```
