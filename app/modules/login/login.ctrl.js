(function() {
  var app = angular.module("kaching.login")
  app.controller("LoginController", ["$state", loginController]);

  function loginController($state) {
    var vm = this;
    vm.submit = submit;
    vm.error = null;

    function submit(credentials) {
      if (credentials.login === "user" && credentials.password === "password") {
        $state.go("/")
      } else {
        vm.error = "Bad credentials"
      }
    }
  }
})();