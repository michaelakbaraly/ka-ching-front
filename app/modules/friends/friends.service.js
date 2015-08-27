(function () {
    var app = angular.module("kaching.friends");
    app.factory("FriendsService", ["$http", friendsService]);

    function friendsService($http) {
        return {
            getFriends: function () {
                $http({url: 'http://localhost:3000/api/restricted', method: 'GET'})
                    .success(function (data, status, headers, config) {
                        console.log(data.name); // Should log 'foo'
                    })
                    .error(function (data, status, headers, config) {

                        console.error('rrr')
                        alert('toto');
                    });
            }
        }
    }
})
();