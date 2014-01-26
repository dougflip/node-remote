xmacroDefault    = require '../lib/xmacroplay'
Commander        = require '../lib/commander'

class XMacroCtrl
  constructor: (@xmacro = xmacroDefault, @commander = new Commander) ->

  keys: (req, res) ->
    @commander.exec @xmacro.keyStr(req.body.keys)
    res.redirect "/"

  text: (req, res) ->
    @commander.exec @xmacro.string(req.body.text)
    res.redirect "/"

module.exports = XMacroCtrl
