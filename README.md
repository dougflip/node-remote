node-remote
===========

## Goals

* Send keyboard commands to my media machine from my phone/tablet
* Open specific URLs on my media machine from my phone/tablet
* Set the volume of my media machine from my phone/tablet

## Running the Server
The simple way is to fire up the app with coffee:

```
coffee src/app.coffee
```

When I am actually running it on my media machine I use [forever](https://github.com/nodejitsu/forever):

```
forever -c coffee start src/app.coffee
```

## Running Tests

* `mocha` - from the root directory
