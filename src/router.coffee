dashboardCtrl   = require './dashboard/controller'
keyInputCtrl    = require './xmacro/controller'
volumeCtrl      = require './volume/controller'
browserCtrl     = require './browser/controller'

module.exports =
  configure: (app) ->
    app.get('/', dashboardCtrl.get)
    app.post('/key_input', keyInputCtrl.post)
    app.post('/volume/:cmd', volumeCtrl.post)
    app.post('/browser', browserCtrl.post)
