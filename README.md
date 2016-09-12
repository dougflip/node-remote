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

```
npm run config:apiUrl -- http://my-machine-name-or-ip:9001
```

This should only be necessary if you changed the default ports of the API server or if you don't want to use the IP of your machine for some reason. This allows you to override the API URL and supply anything you want.

## Running with systemd

This setup is based on [running-node-js-linux-systemd](https://blog.codeship.com/running-node-js-linux-systemd/)

Use the sample unit file [node-remote-client@.service](node-remote-client@.service) as a basis for a
file saved at `/etc/systemd/system/node-remote-client@.service`

```
systemctl daemon-reload
systemctl enable node-remote-client@1
systemctl start node-remote-client@1
```
