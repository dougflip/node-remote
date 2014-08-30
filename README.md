node-remote
===========

This is a front end client for [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api).
Also included is a small web server to both serve this Angular app and proxy calls to the above API. More on that below.

Before anything else you'll want to get the API up and running so if you haven't checked out that project yet head over to [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api) first.

## Getting Started

You need to install dependencies and build the client bundle through [browserify](http://browserify.org/).

- `npm install`
- `bower install`
- `npm run build` - builds the bundle via browserify

## Running the App

```
export API_HOST="localhost";API_PORT=9001 npm start
```

This will start up a small node server running on port `9000` and also act as a proxy for API calls. You should now be able to navigate to [http://localhost:9000/#/netflix](http://localhost:9000/#/netflix). The server is also proxying service calls over to port 9001 (on localhost). You can control the host and port of the api proxy by the `API_HOST` and `API_PORT` respectively. 

## Basic Overview

You will have two servers running behind the scenes: 1 to serve this front end SPA and another serving the [API](https://github.com/dougflip/node-remote-api). As mentioned above, these ports are hard coded to 9000 and 9001.

The general concept is that this client makes AJAX requests to the API which in turn takes action on your media machine. So clicking the volume up button, for example, sends a POST request to [/system/volume](http://localhost:9000/system/volume) which in turn is proxied to the API. The end result is the volume on the system is set to the new level.

Technically, the initial post request is actually sent to port `9000` and then proxied to `9001`. Ironically, this is not to get around CORS but just to keep things simple (I think). When you think about running the client from your phone then the client app needs to know the URL of the API server. This would not be something to hard code (since it would most likely be an IP address inside your internal network) so I would have to have a configuration for the client. With this design, the client just sends requests back to the initating server and then the server can be configured to know the API server. I am sure this design will be tweaked, but should work fine for now.

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
