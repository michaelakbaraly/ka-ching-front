describe("Controller: LoginController", function () {

  beforeEach(module("kaching.login"));

  var controller;

  var state = {
    go: function () {
    }
  };


  beforeEach(inject(function (_$controller_) {
    spyOn(state, "go");
    controller = _$controller_("LoginController", {$state: state});
  }));

  describe("the submit method", function () {
    describe("when the credentials are good", function() {
      it("should redirect to the homepage", function () {
        var credentials = {
          login: "user",
          password: "password"
        };
        var vm = controller;
        vm.submit(credentials);
        expect(state.go).toHaveBeenCalledWith("/");
        expect(vm.error).toBe(null);
      });
    });
    describe("when the credentials are bad", function() {
      it("should not grant the access and show an error message", function () {
        var credentials = {
          login: "badUser",
          password: "badPassword"
        };
        var vm = controller;
        vm.submit(credentials);
        expect(state.go).not.toHaveBeenCalled();
        expect(vm.error).toEqual("Bad credentials");
      });
    });
  });
});