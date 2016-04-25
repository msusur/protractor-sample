describe('index page', function() {
  it('should say yay! in the first place', function() {
    browser.get('http://localhost:3333');

    var val = element.all(by.css("yay")).first().getText();
    expect("yay!").toEqual(val);
  });
});