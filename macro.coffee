sys     = require 'sys'
exec    = require('child_process').exec

module.exports.playKeys = (cmd) ->
  input = cmd.keys.join("\n")
  console.log "About to send macro keys: #{input}"
  exec "printf #{input} | xmacroplay \"$DISPLAY\""
