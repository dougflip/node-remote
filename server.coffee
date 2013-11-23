http      = require 'http'
macro     = require './macro'
PauseCmd  = require './pause_cmd'

server = http.createServer (request, response) ->
  return response.end() unless request.url == '/'

  macro.playKeys new PauseCmd
  response.writeHead 200, 'Content-Type': 'text/plain'
  response.end('success')

server.listen 9000

console.log "Server listening on port 9000..."
