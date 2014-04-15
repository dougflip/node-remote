
function SystemModule(){}

SystemModule.prototype.volumeInput = function(){
  return element(by.model('systemCtrl.volume'));
};

SystemModule.prototype.volumeUpBtn = function(){
  return element(by.css('.system--volume-up'));
};

SystemModule.prototype.volumeDownBtn = function(){
  return element(by.css('.system--volume-down'));
};

function HeaderModule(){}

HeaderModule.prototype.mainMenuButton = function(){
  return element(by.css('.main-menu'));
};

function MenuModule(){}

MenuModule.prototype.getLinkAt = function(index){
  return element.all(by.css('.main-nav--item-container li')).get(index);
};

MenuModule.prototype.systemLink = function(){
  return this.getLinkAt(0);
};

MenuModule.prototype.browserLink = function(){
  return this.getLinkAt(1);
};

MenuModule.prototype.netflixLink = function(){
  return this.getLinkAt(2);
};

MenuModule.prototype.trackpadLink = function(){
  return this.getLinkAt(3);
};

function BrowserModule(){}

BrowserModule.prototype.launchInput = function(){
  return element(by.model('browserCtrl.launchUrl'));
};

function NetflixModule(){}

NetflixModule.prototype.searchInput = function(){
  return element(by.model('netflixCtrl.searchQuery'));
}

function TrackpadModule(){}

TrackpadModule.prototype.sendTextInput = function(){
  return element(by.model('trackpadCtrl.text'));
}

module.exports = {
  getIndex: function(){
    browser.get('http://localhost:9000');
  },
  SystemModule: SystemModule,
  HeaderModule: HeaderModule,
  MenuModule: MenuModule,
  BrowserModule: BrowserModule,
  NetflixModule: NetflixModule,
  TrackpadModule: TrackpadModule
};
