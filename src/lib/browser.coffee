urlHasQuotes = (url) ->
	/^['"]/.test(url)

class Browser
  buildCommand: (url, flags = {}) ->
    return null unless url?
    url = '"' + url + '"' unless urlHasQuotes url

    "google-chrome #{buildFlagsString(flags)} #{url}"

  buildFlagsString = (flags) ->
    Object.keys(flags)
      .map((x) -> "#{x}=#{flags[x]}")
      .join(" ")

module.exports = Browser
