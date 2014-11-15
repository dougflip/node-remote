## Basic Idea

I have some idead about how this could become a plugin based system. I would keep the core UI to just a few modules: browser, keyboard, system, trackpad. Then modules like Netflix or Spotify would be installed via bower and registered somehow. This way node remote itself has a "core", but anyone can develop a plugin to extend functionality. I still need to work out the details of how that would all play together.

I am thinking this could work through a Browserify build process. The API is doing a similar concept where I record the plugins into a JSON file and then require them later in Node. Maybe the same process could work here and use Browserify to build them all into a bundle.
