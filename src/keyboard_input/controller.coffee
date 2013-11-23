Commander   = require '../commander'
XMacroPlay  = require './xmacroplay'
Pause       = require './pause_cmd'

commander = new Commander
xmacro    = new XMacroPlay

module.exports =
  get: (req, res) ->
    commander.exec xmacro.buildCommand(new Pause)
    res.send "Spacebar sent!"
