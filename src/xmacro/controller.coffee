Commander     = require '../commander'
XMacroPlay    = require './xmacroplay'

commander = new Commander
xmacro    = new XMacroPlay

module.exports =
  get: (req, res) ->
    commander.exec xmacro.buildCommand(req.query.keys)
    res.send "Sent keyinput: #{req.query.keys}"
