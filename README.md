node-remote
===========

This is a front end client for [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api).
Also included is a small web server to serve this Angular app.

Before anything else you'll want to get the API up and running so if you haven't checked out that project yet head over to [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api) first.

## Getting Started

You need to install dependencies and build the client bundle through [browserify](http://browserify.org/).

- `npm install`
- `bower install`
- `API_URL=http://localhost:9001 npm run build` - builds the bundle via browserify and sets the API url via envify

## Running the App

```
npm start
```

This will start up a small node server running on port `9000`. You should now be able to navigate to [http://localhost:9000/](http://localhost:9000/). All API requests will be sent *directly* to the API_URL provided in the build step up above. This is in contrast to previous versions where this server acted as a proxy server.

## Basic Overview

You will have two servers running behind the scenes: 1 to serve this front end SPA and another serving the [API](https://github.com/dougflip/node-remote-api). As mentioned above, these ports are defaulted/coded to 9000 and 9001.

The general concept is that this client makes AJAX requests to the API which in turn takes action on your media machine. Everything is now set up to run over CORS and a build step (along with an Angular interceptor) ensures the client calls go directly to the API server.

So when you build the client code you most likely need to know the IP of the machine hosting the API server. For example, if my internal media machine has an ip of `10.0.0.6` then I would want to build as such: `API_URL=http://10.0.0.6 npm run build`. This will result in all of my client API requests being properly routed.

## Running Tests

Unit tests:

```
npm test
```

e2e tests:

The e2e tests *should* work even though all of the API endpoints are going to scream 404s at you under the hood.  
I'll put in a mock backend at somepoint - which should be easy since everything returns 204's:

```
npm run e2e
```
