class XMacroPlay

  isValidCommand = (cmd) ->
    cmd? && cmd.keys? && cmd.keys.length > 0

  buildCommand: (cmd) ->
    return null unless isValidCommand cmd

    input = cmd.keys.join("\\n")
    "printf \"#{input}\" | xmacroplay \"$DISPLAY\""

module.exports = XMacroPlay
