express = require 'express'
router  = require './router'

app     = express()
router.configure app

app.listen 9000

console.log "Listening for requests on 9000"
