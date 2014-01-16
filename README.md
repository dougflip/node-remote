node-remote
===========

## Getting Started

- Install [xmacroplay](http://xmacro.sourceforge.net) (I think I used apt-get, need to check)
- Install [xdotool](http://tuxradar.com/content/xdotool-script-your-mouse) (I think I used apt-get, need to check)
- Install latest of [Node](http://nodejs.org/)
- `npm install -g coffee-script` install CoffeeScript globally
- `npm install -g bower` install bower globally

## Running the Server
Install dependencies

```
npm install
bower install
```

For regular debugging you can just fire up the app with coffee:

```
coffee src/app.coffee
```

When I am actually running it on my media machine I use [forever](https://github.com/nodejitsu/forever):

```
npm install -g forever
forever -c coffee start src/app.coffee
```

Either way you should be able to visit [localhost:9000](http://localhost:9000) at this point.

## Basic Overview

The above starts up a web server listening on 9000.  
You should be able to request the index page over your local network
by referencing the server machine by ip - something like 192.168.x.x:9000.

The controls on the UI send HTTP requests to the Node server.  
The Node server then issues commands directly to the host machine.  
Most of these end up being xmacro (keyboard input) or xdotool (mouse input) commands.

## Features

- Volume control
- Open Chrome (optionally to a URL)
- Close the active window (alt + F4)
- Suspend
- Netflix
    - search (launches a browser to "Profile 1")
    - pause/play (key input of "spacebar")
    - full screen (key input of "f")
    - exit full screen (key input of "Escape")
    - some hard coded links (yes, I still watch X-files)
- Mouse Input
    - a touchpad (runs over AJAX - I'd like to try WebSockets at some point)
    - left click
    - right click

## Running Tests

```
npm install -g mocha
mocha
```
