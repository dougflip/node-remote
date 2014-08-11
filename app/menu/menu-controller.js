function MenuController($rootScope, $location){
  this.menuIsOpen = false;
  var self = this;
  $rootScope.$on('menu:open', function(){
    self.openMenu();
  });
  $rootScope.$on('$locationChangeSuccess', function(){
    self.setActiveItem($location.path());
  });
  this.setActiveItem($location.path())
}

MenuController.prototype.setActiveItem = function(item){
  this.activeItem = item;
}

MenuController.prototype.openMenu = function(){
  this.menuIsOpen = true;
};

MenuController.prototype.closeMenu = function(){
  this.menuIsOpen = false;
};

module.exports = ['$rootScope', '$location', MenuController];
