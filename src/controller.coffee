Commander   = require './lib/commander'
Volume      = require './lib/volume'
Browser     = require './lib/browser'
xmacro      = require './lib/xmacroplay'

commander   = new Commander
browser     = new Browser
volume      = new Volume

module.exports =
  browser: (req, res) ->
    commander.exec(
      browser.buildCommand(req.body.url, req.body.flags)
    )
    res.redirect "/"

  dashboard: (req, res) ->
    res.render("index")

  keys: (req, res) ->
    commander.exec xmacro.create(req.body.keys)
    res.redirect "/"

  volume: (req, res) ->
    cmd = req.params.cmd
    commander.exec volume[cmd].call(this, req.body.options)
    res.redirect '/'
