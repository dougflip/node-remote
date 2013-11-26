Keystroke   = require './keystroke'

class XMacroPlay

  buildCommand: (keys) ->
    return null unless areKeysValid keys

    buildCommand buildKeystrokes keys

  areKeysValid = (keys) ->
    keys? && keys.length > 0

  buildKeystrokes = (keys) ->
    result = []
    keys.forEach (x) -> result = result.concat new Keystroke(x).build()
    result

  buildCommand = (keys) ->
    "printf \"#{keys.join("\\n")}\" | xmacroplay \"$DISPLAY\""

module.exports = XMacroPlay
