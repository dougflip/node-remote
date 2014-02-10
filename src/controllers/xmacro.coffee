XMacroPlay    = require '../lib/xmacroplay'
Commander     = require '../lib/commander'

class XMacroCtrl
  constructor: (@xmacroplay = new XMacroPlay, @commander = new Commander) ->

  keys: (req, res) ->
    @commander.exec @xmacroplay.keyStr(req.body.keys)
    res.redirect "/"

  text: (req, res) ->
    @commander.exec @xmacroplay.string(req.body.text)
    res.redirect "/"

module.exports = XMacroCtrl
