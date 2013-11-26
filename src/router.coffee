keyInputCtrl    = require './xmacro/controller'
volumeCtrl      = require './volume/controller'

module.exports =
  configure: (app) ->
    app.get('/key_input', keyInputCtrl.get)
    app.get('/volume/:cmd', volumeCtrl.get)
