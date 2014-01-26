Commander   = require '../lib/commander'
Browser     = require '../lib/browser'
system      = require '../lib/system'

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

  system: (req, res) ->
    cmd = req.params.cmd
    commander.exec system[cmd].call(this, req.body.options)
    res.redirect '/'
