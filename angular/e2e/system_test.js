describe('SampleTest', function(){
  it('should find some stuff', function(){
    browser.get('http://localhost:9000');

    element.all(by.css('.main-nav a')).get(1).click();

    var pageText = $('.main-content').getText();

    expect(pageText).toContain('browser');
  });
})