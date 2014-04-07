module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/system");

  $stateProvider.state('system', {
    url: '/system',
    templateUrl: '/system/system.html',
    controller: 'systemCtrl as systemCtrl'
  });
};
