BrowserCtrl = require './controllers/browser'
coreCtrl    = require './controllers/core'
XDoToolCtrl = require './controllers/xdotool'
XMacroCtrl  = require './controllers/xmacro'
SystemCtrl  = require './controllers/system'
netflixCtrl = require './controllers/netflix'

browserCtrl = new BrowserCtrl
xdoCtrl = new XDoToolCtrl
xmacroCtrl = new XMacroCtrl
systemCtrl = new SystemCtrl

module.exports =
  configure: (app) ->
    app.get '/', coreCtrl.dashboard

    app.post '/browser/launch', browserCtrl.launch.bind(browserCtrl)
    app.post '/browser/closeTab', browserCtrl.closeTab.bind(browserCtrl)
    app.post '/browser/nextTab', browserCtrl.nextTab.bind(browserCtrl)
    app.post '/browser/zoomIn', browserCtrl.zoomIn.bind(browserCtrl)
    app.post '/browser/zoomOut', browserCtrl.zoomOut.bind(browserCtrl)
    app.post '/browser/actualSize', browserCtrl.actualSize.bind(browserCtrl)

    app.post '/browser', coreCtrl.browser
    app.post '/keys', xmacroCtrl.keys.bind(xmacroCtrl)
    app.post '/text', xmacroCtrl.text.bind(xmacroCtrl)

    app.post '/mouse/moveRelative', xdoCtrl.moveRelative.bind(xdoCtrl)
    app.post '/mouse/leftClick', xdoCtrl.leftClick.bind(xdoCtrl)
    app.post '/mouse/rightClick', xdoCtrl.rightClick.bind(xdoCtrl)
    app.post '/mouse/doubleClick', xdoCtrl.doubleClick.bind(xdoCtrl)

    app.post '/netflix/search', netflixCtrl.search

    app.post '/system/mute', systemCtrl.mute.bind(systemCtrl)
    app.post '/system/setVolume', systemCtrl.setVolume.bind(systemCtrl)
    app.post '/system/suspend', systemCtrl.suspend.bind(systemCtrl)
