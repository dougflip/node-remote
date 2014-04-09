function MenuController($rootScope){
  this.menuIsOpen = false;
  var self = this;
  $rootScope.$on('menu:open', function(){
    self.openMenu();
  });
}

MenuController.prototype.openMenu = function(){
  this.menuIsOpen = true;
};

MenuController.prototype.closeMenu = function(){
  this.menuIsOpen = false;
};

module.exports = ['$rootScope', MenuController];
