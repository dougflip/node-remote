coreCtrl    = require './controllers/core'
netflixCtrl	= require './controllers/netflix'

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard
    app.post '/browser', coreCtrl.browser
    app.post '/keys', coreCtrl.keys
    app.post '/text', coreCtrl.text
    app.post '/mousemove', coreCtrl.mouseMove
    app.post '/mouseclick', coreCtrl.mouseClick
    app.post '/system/:cmd', coreCtrl.system

    app.post '/netflix/search', netflixCtrl.search
