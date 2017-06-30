const mod = require('../module');

module.exports = function AttractionDetailController($scope, $mdSidenav) {
    $scope.formatHm = function(duration) {
        return moment(duration).format("hh:mm");
    };

    $scope.formatPrice = function(price) {
        return 'R$ ' + (+price).toFixed(2).replace('.', ',');
    };


};