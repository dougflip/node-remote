var systemPage = {
  get: function(){
    browser.get('http://localhost:9000');
  },
  volumeInput: element(by.model('systemCtrl.volume')),
  volumeUpBtn: element(by.css('.system--volume-up')),
  volumeDownBtn: element(by.css('.system--volume-down'))
};

describe('System page', function(){
  describe('setting volume up and down', function(){
    it('should reflect changes in the UI', function(){
      systemPage.get();
      expect(systemPage.volumeInput.getAttribute('value')).toEqual('50');

      systemPage.volumeUpBtn.click();
      expect(systemPage.volumeInput.getAttribute('value')).toEqual('60');

      systemPage.volumeDownBtn.click();
      expect(systemPage.volumeInput.getAttribute('value')).toEqual('50');
    });
  });
});
