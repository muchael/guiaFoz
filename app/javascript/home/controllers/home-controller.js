const mod = require('../module');
require('./home-controller.css');

module.exports = function HomeController($scope, $mdSidenav, $state, $STATES, $http) {

    $scope.model = {
        filter: {
            arrival: "",
            departure: "",
            budget: "",
            tag_ids: []
        },
        tagsSelected: {}
    };

    $scope.tags = [];

    $http.get('/tags.json').then(function(data) {
        $scope.tags = data.data;
        $scope.tags.forEach(function(tag) {
            tag.selected = false;
        });
    });

    $scope.findItineraryGuide = function () {

        $scope.model.filter.tag_ids = [];

        angular.forEach($scope.tags,function (tag) {
            if( tag.selected ) {
                $scope.model.filter.tag_ids.push(tag.id);
            }
        });

        console.log($scope.model.filter);
        $state.go($STATES.SEARCH, {query: $scope.model.filter});
    };

    /**
     *
     */
    $scope.toggleMenuSideNavHandler = function () {
        $mdSidenav('menuSideNav').toggle();
    };

};