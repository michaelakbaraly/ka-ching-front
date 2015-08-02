describe("Service: FriendsService", function () {

  beforeEach(module("kaching.friends"));

  var service, httpBackend;

  beforeEach(inject(function (FriendsService, $httpBackend) {
    service = FriendsService;
    httpBackend = $httpBackend;
  }));

  describe("the getFriends method", function () {
    it("should get the data from the database", function () {
    })
  });
});