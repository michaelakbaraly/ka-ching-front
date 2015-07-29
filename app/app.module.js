(function () {

  var app = angular.module("kaching", ["ui.router", "templates"]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("homepage", {
        url: "/"
      })
      .state("login", {
        url: "/login",
        templateProvider: function($templateCache){
          return $templateCache.get('login/login.tpl.html');
        }
      });
  });

})();