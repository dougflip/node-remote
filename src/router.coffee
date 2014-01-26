coreCtrl    = require './controllers/core'
XDoToolCtrl = require './controllers/xdotool'
XMacroCtrl  = require './controllers/xmacro'
netflixCtrl = require './controllers/netflix'

xdoCtrl = new XDoToolCtrl
xmacroCtrl = new XMacroCtrl

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard
    app.post '/browser', coreCtrl.browser
    app.post '/keys', xmacroCtrl.keys.bind(xmacroCtrl)
    app.post '/text', xmacroCtrl.text.bind(xmacroCtrl)
    app.post '/system/:cmd', coreCtrl.system

    app.post '/mouse/moveRelative', xdoCtrl.moveRelative.bind(xdoCtrl)
    app.post '/mouse/leftClick', xdoCtrl.leftClick.bind(xdoCtrl)
    app.post '/mouse/rightClick', xdoCtrl.rightClick.bind(xdoCtrl)
    app.post '/mouse/doubleClick', xdoCtrl.doubleClick.bind(xdoCtrl)

    app.post '/netflix/search', netflixCtrl.search
