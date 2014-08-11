function HeaderController($rootScope, systemService){
  this.rootScope = $rootScope;
  this.systemService = systemService;
}

HeaderController.prototype.openMainMenu = function(){
  this.rootScope.$emit('menu:open');
};

HeaderController.prototype.mute = function(){
  this.systemService.mute();
};

module.exports = ['$rootScope', 'systemService', HeaderController];
