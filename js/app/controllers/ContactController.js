function ContactController() {
  var vm = this;

  vm.name = "Kevin"
  vm.email = "kevin@kevin.com"
  vm.phone = "1239999999"

  this.changeName = function () {
    vm.name = 'Bobby'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
