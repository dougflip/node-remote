module.exports = function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/system");

  $stateProvider
    .state('browser', {
      url: '/browser',
      templateUrl: '/browser/browser.html',
      controller: 'browserCtrl as browserCtrl'
    })
    .state('netflix', {
      url: '/netflix',
      templateUrl: '/netflix/netflix.html',
      controller: 'netflixCtrl as netflixCtrl'
    })
    .state('system', {
      url: '/system',
      templateUrl: '/system/system.html',
      controller: 'systemCtrl as systemCtrl'
    })
    .state('trackpad', {
      url: '/trackpad',
      templateUrl: '/trackpad/trackpad.html',
      controller: 'trackpadCtrl as trackpadCtrl'
    });
};
