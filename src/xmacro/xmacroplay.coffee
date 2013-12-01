keystroke   = require './keystroke'

areKeysValid = (keys) ->
  keys? && keys.length > 0

buildKeystrokes = (keys) ->
  result = []
  keys.forEach (x) -> result = result.concat keystroke.create x
  result

buildCommand = (keys) ->
  "printf \"#{keys.join("\\n")}\" | xmacroplay \"$DISPLAY\""

module.exports =
  create: (keys) ->
    return null unless areKeysValid keys

    buildCommand buildKeystrokes keys.split(' ')
