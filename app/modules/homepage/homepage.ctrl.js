(function () {
    var app = angular.module("kaching.homepage");
    app.controller("HomepageController", ["FriendsService", homepageController]);

    function homepageController(FriendsService) {

        var vm = this;
        vm.balance = 123;

        FriendsService.getFriends(function (error, data) {
            if (error) {
                console.error('erreur lors de la récupération de la liste des amis');
            } else {
                vm.friends = data;
            }
        });
    }
})();