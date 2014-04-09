function HeaderController($rootScope){
  this.rootScope = $rootScope;
}

HeaderController.prototype.openMainMenu = function(){
  this.rootScope.$emit('menu:open');
};

module.exports = ['$rootScope', HeaderController];
