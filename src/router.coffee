coreCtrl    = require './controllers/core'
xdoCtrl			= require './controllers/xdotool'
netflixCtrl	= require './controllers/netflix'

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard
    app.post '/browser', coreCtrl.browser
    app.post '/keys', coreCtrl.keys
    app.post '/text', coreCtrl.text
    app.post '/system/:cmd', coreCtrl.system

    app.post '/mouse/leftClick', xdoCtrl.leftClick
    app.post '/mouse/rightClick', xdoCtrl.rightClick
    app.post '/mouse/doubleClick', xdoCtrl.doubleClick

    app.post '/netflix/search', netflixCtrl.search
