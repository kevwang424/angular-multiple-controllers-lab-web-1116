function StaffController() {
  var vm = this;

  vm.name = "Paul"
  vm.email = "paul@kevin.com"
  vm.phone = "8675309"

  this.changeName = function () {
    vm.name = 'Pauc'
  }
}

angular
  .module('app')
  .controller('StaffController', StaffController)
