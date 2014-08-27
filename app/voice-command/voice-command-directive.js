function voiceCommandDirective(systemService, netflixService){

  var witCommands = {
    netflix: function(params){
      netflixService.search(params.netflix_query.value);
    },
    volume: function(params){
      systemService.setVolume(params.number.value);
    }
  }

  return {
    restrict: 'A',
    link: function(scope, el){
      var mic = new Wit.Microphone(el[0]);

      mic.onresult = function (intentName, params) {
        var fn = witCommands[intentName] || intentNoop;
        fn(params);
      };

      mic.connect("ETTAITUGZ5XDPMJTBSCZP3KY5IVJB4MO");
    }
  }
}

function intentNoop(){
  console.log('no matching command...');
}

module.exports = ['systemService', 'netflixService', voiceCommandDirective];
