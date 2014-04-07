module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/system");

  $stateProvider.state('system', {
    url: '/system',
    template: '/system/system.html'
  });
};
