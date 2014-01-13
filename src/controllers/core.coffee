Commander   = require '../lib/commander'
Browser     = require '../lib/browser'
system      = require '../lib/system'
xmacro      = require '../lib/xmacroplay'

commander   = new Commander
browser     = new Browser

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

  mouseMove: (req, res) ->
    commander.exec "xdotool mousemove_relative -- #{req.body.xrel} #{req.body.yrel}"
    res.json(200)

  system: (req, res) ->
    cmd = req.params.cmd
    commander.exec system[cmd].call(this, req.body.options)
    res.redirect '/'
