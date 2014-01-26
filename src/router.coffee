coreCtrl    = require './controllers/core'
XDoToolCtrl	= require './controllers/xdotool'
netflixCtrl	= require './controllers/netflix'

xdoCtrl = new XDoToolCtrl

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard
    app.post '/browser', coreCtrl.browser
    app.post '/keys', coreCtrl.keys
    app.post '/text', coreCtrl.text
    app.post '/system/:cmd', coreCtrl.system

    app.post '/mouse/moveRelative', xdoCtrl.moveRelative.bind(xdoCtrl)
    app.post '/mouse/leftClick', xdoCtrl.leftClick.bind(xdoCtrl)
    app.post '/mouse/rightClick', xdoCtrl.rightClick.bind(xdoCtrl)
    app.post '/mouse/doubleClick', xdoCtrl.doubleClick.bind(xdoCtrl)

    app.post '/netflix/search', netflixCtrl.search
