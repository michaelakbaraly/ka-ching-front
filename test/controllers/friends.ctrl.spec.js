describe("Controller: FriendsController", function () {

  beforeEach(module("kaching.friends"));

  var controller;
  var FriendsService = {
    getFriends: function () {
      return "fofkokfokro";
    }
  };

  beforeEach(inject(function (_$controller_) {
    spyOn(FriendsService, "getFriends");
    controller = _$controller_("FriendsController", {FriendsService: FriendsService});
  }));

  describe("the getFriends method", function () {
    it("should call the getFriends service method", function () {
      var vm = controller;
      vm.getFriends();
      expect(FriendsService.getFriends).toHaveBeenCalled();
    })
  });
});