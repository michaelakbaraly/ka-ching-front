(function() {
  var app = angular.module("kaching.login");
  app.controller("LoginController", ["$state", "$http", "$window", loginController]);

  function loginController($state, $http, $window) {
    var vm = this;
    vm.submit = submit;
    vm.error = null;

    function submit(credentials) {
      $http.post('http://localhost:3000/authenticate', credentials)
          .success(function (data, status, headers, config) {
            $window.sessionStorage.token = data.token;
          })
          .error(function (data, status, headers, config) {
            // Erase the token if the user fails to log in
            delete $window.sessionStorage.token;

            // Handle login errors here
            vm.error = 'Error: Invalid user or password';
          });
    }
  }
})();