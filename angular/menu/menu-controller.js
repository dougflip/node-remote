function MenuController($rootScope){
  this.menuIsOpen = false;
  $rootScope.$on('menu:open', this.openMenu.bind(this));
}

MenuController.prototype.openMenu = function(){
  this.menuIsOpen = true;
};

MenuController.prototype.closeMenu = function(){
  this.menuIsOpen = false;
};

module.exports = ['$rootScope', MenuController];
