Commander   = require '../commander'
Browser     = require './index'

commander = new Commander
browser = new Browser

module.exports =
  post: (req, res) ->
    commander.exec(
      browser.buildCommand(req.body.url, req.body.flags)
    )
    res.redirect "/"
