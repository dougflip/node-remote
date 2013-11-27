Commander     = require '../commander'
XMacroPlay    = require './xmacroplay'

commander = new Commander
xmacro    = new XMacroPlay

module.exports =
  post: (req, res) ->
    commander.exec xmacro.buildCommand(req.body.keys)
    res.redirect "/"
