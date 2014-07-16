urlHasQuotes = (url) ->
	/^['"]/.test(url)

class Browser
  buildCommand: (url, flags = {}) ->
    return null unless url?
    url = '"' + url + '"' unless urlHasQuotes url

    "firefox #{url}"

module.exports = Browser
