(function () {

  var app = angular.module("kaching", [
    "kaching.login", "ui.router", "templates"]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("homepage", {
        url: "/",
        templateProvider: function($templateCache){
          return $templateCache.get('homepage/homepage.tpl.html');
        }
      })
      .state("login", {
        url: "/login",
        templateProvider: function($templateCache){
          return $templateCache.get('login/login.tpl.html');
        }
      });
  });

})();