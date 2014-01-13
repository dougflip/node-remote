keystroke   = require './keystroke'

areKeysValid = (keys) ->
  keys? && keys.length > 0

buildKeystrokes = (keys) ->
	keys.map (x) -> keystroke.create x

buildCommand = (keys) ->
  "printf \"#{keys.join("\\n")}\" | xmacroplay \"$DISPLAY\""

module.exports =
  keyStr: (keys) ->
		return null unless areKeysValid keys
		buildCommand buildKeystrokes keys.split(' ')

  string: (str) ->
		return null unless str?
		buildCommand ["String #{str}"]
