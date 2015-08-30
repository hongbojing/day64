angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AlertDemoCtrl', AlertDemoCtrl);

function AlertDemoCtrl() {
  var vm = this;

  vm.addAlert = addAlert;
  vm.closeAlert = closeAlert;
  vm.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  function addAlert() {
    vm.alerts.push({msg: 'Another alert!'});
  }

  function closeAlert(index) {
    vm.alerts.splice(index, 1);
  }
}
