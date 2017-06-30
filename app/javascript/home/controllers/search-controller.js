const mod = require('../module');
require('./search-controller.css');
const moment = require('moment');

module.exports = function SearchController($scope, $mdSidenav, $state, $http, $STATES) {

    $scope.loading = true;
    $scope.attraction = {};
    $scope.model = {
        roteiro : []
       };

    if(!$state.params.query) {
        $state.go($STATES.HOME);
    } else {
        $http({
            method: 'POST',
            url: '/api/attractions/query.json',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify($state.params.query)
        }).then(function(data) {
            $scope.model.itineraryId = data.data.itinerary_id;
            $scope.model.roteiro = data.data.attractions;

            angular.forEach($scope.model.roteiro, function(roteiro){
                roteiro.selected = false;
            });

            $scope.loading = false;
        }, function() {
            $scope.loading = false;
        });
    }

    $scope.model = {
        daySelected: ""
    };

    $scope.formatHm = function(duration) {
        return moment(duration).format("hh:mm");
    };

    $scope.formatPrice = function(price) {
        return 'R$ ' + (+price).toFixed(2).replace('.', ',');
    };

    /**
     *
     * @param attraction
     */
    $scope.likeAttraction = function(attraction, event) {
        event.stopPropagation();
        $http.post('/api/attractions/like/' + attraction.id).then(function(data) {
            attraction.liked = true;
            attraction.likes = data.data.likes;
        });
    };

    $scope.toggleMenuSideNavHandler = function () {
        console.log("toggleMenuSideNavHandler");
        // $mdSidenav('menuSideNav').toggle();
    };


    $scope.openDetailsSidenav = function (attraction) {
        $scope.attraction = attraction;
        $mdSidenav('right').open();
    };
    $scope.closeDetailsSidenav = function () {
        $mdSidenav('right').toggle();
    }

};