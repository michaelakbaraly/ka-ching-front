describe("Controller: LoginController", function() {

  beforeEach(module("kaching.login"));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    $controller("LoginController");
  }));

  it("should say hello", function() {
    console.log("hello");
  })
});