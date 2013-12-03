Commander   = require './commander'
Volume      = require './volume'
Browser     = require './browser'
xmacro      = require './xmacro/xmacroplay'

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
    res.render("dashboard/views/index")

  keys: (req, res) ->
    commander.exec xmacro.create(req.body.keys)
    res.redirect "/"

  volume: (req, res) ->
    cmd = req.params.cmd
    commander.exec volume[cmd].call(this, req.body.options)
    res.redirect '/'
