Commander   = require '../lib/commander'
Browser     = require '../lib/browser'

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
