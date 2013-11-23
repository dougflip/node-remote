sys     = require 'sys'
exec    = require('child_process').exec

module.exports.playKeys = (cmd) ->
  input = cmd.keys.join("\\n")
  #console.log "About to send macro keys: #{input}"
  console.log "printf \"#{input}\" | xmacroplay \"$DISPLAY\""
  exec "printf \"#{input}\" | xmacroplay \"$DISPLAY\"", (error, stdout, stderr) -> sys.puts stdout
