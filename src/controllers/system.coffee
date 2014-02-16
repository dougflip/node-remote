System    = require '../lib/system'
Commander = require '../lib/commander'

class SystemCtrl
  constructor: (@system = new System, @commander = new Commander) ->

  mute: (req, res) ->
    @commander.exec @system.mute()
    res.redirect '/'

  setVolume: (req, res) ->
    @commander.exec @system.setVolume(req.body.level)
    res.redirect '/'

  suspend: (req, res) ->
    @commander.exec @system.suspend()
    res.redirect '/'

module.exports = SystemCtrl
