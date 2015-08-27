(function() {
  var app = angular.module("kaching.friends")
  app.controller("FriendsController", ["FriendsService", friendsController])

  function friendsController(FriendsService) {
    var vm = this;
    vm.getFriends = getFriends();

    function getFriends() {
      return FriendsService.getFriends();
    }

  }
})();