Commander   = require '../lib/commander'
Browser     = require '../lib/browser'

BASE_SEARCH_URL = 'http://movies.netflix.com/WiSearch?v1='
browserFlags = '--profile-directory': "\"Profile 1\""
commander = new Commander
browser = new Browser

module.exports = 
  search: (req, res) ->
    url = BASE_SEARCH_URL + encodeURIComponent(req.body.searchTerm)
    commander.exec(browser.buildCommand(url, browserFlags))
    res.redirect "/"
