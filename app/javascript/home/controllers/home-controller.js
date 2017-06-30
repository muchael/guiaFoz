const mod = require('../module');
require('./home-controller.css');

module.exports = function HomeController($scope, $mdSidenav) {

    /**
     *
     */
    $scope.toggleMenuSideNavHandler = function () {
        console.log("toggleMenuSideNavHandler");
        $mdSidenav('menuSideNav').toggle();
    };

};