Commander   = require '../lib/commander'
Browser     = require '../lib/browser'

commander   = new Commander
browser     = new Browser

module.exports =
  dashboard: (req, res) ->
    res.render("index")
