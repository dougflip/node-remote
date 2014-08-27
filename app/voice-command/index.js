var ng = require('angular')

module.exports = ng.module('voiceCommand', [
  require('../netflix').name,
  require('../system').name  
])
.directive('voiceCommandMic', require('./voice-command-directive'));
