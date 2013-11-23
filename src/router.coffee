keyInputCtrl    = require './keyboard_input/controller'
volumeCtrl      = require './volume/controller'

module.exports =
  configure: (app) ->
    app.get('/key_input', keyInputCtrl.get)
    app.get('/volume/:cmd', volumeCtrl.get)
