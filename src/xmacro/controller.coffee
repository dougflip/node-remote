Commander     = require '../commander'
xmacro        = require './xmacroplay'

commander = new Commander

module.exports =
  post: (req, res) ->
    commander.exec xmacro.create(req.body.keys)
    res.redirect "/"
