class XMacroPlay

  buildCommand: (cmd) ->
    input = cmd.keys.join("\\n")
    "printf \"#{input}\" | xmacroplay \"$DISPLAY\""

module.exports = XMacroPlay
