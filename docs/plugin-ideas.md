## Basic Idea

I have some ideas about how this could become a plugin based system. I would keep the core UI to just a few modules: browser, keyboard, system, trackpad. Then modules like Netflix or Spotify would be installed via npm and registered somehow. This way node remote itself has a "core", but anyone can develop a plugin to extend functionality. I still need to work out the details of how that would all play together.

I am thinking this could work through a Browserify build process. The API is doing a similar concept where I record the plugins into a JSON file and then require them later in Node. Maybe the same process could work here and use Browserify to build them all into a bundle.

The long term vision is just like the API in that this could be a globally installed module. So you would install plugins via a command line process and then need to build the code and start the server. The plugins would be recorded and dynamically built into the index page and registered with Angular.
