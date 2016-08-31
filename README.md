node-remote
===========

This is a front end client for [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api).
Also included is a small web server to serve this Angular app.

Before anything else you'll want to get the API up and running so if you haven't checked out that project yet head over to [https://github.com/dougflip/node-remote-api](https://github.com/dougflip/node-remote-api) first.

## Running the App

```
npm install
npm start
```

This will start up a small node server running on port `9000`. You should now be able to navigate to [http://localhost:9000/](http://localhost:9000/).

## Configuring the IP of the API Server

By default, the build will use the IP of the machine building the code as the IP of the API server.
In other words, where you built the code is where the client will send requests.
This is most likely what you want which means everything will just work out of the box, but if you need to override that behavior:

```
npm run config:apiUrl -- http://my-machine-name-or-ip:9001
```

Rebuild the client (`npm start`) and requests will now be made to the address you specified
