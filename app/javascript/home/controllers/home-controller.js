const mod = require('../module');
require('./home-controller.css');

module.exports = function HomeController($scope, $mdSidenav, $state, $STATES) {

    $scope.model = {
        filter: {
            arrival: "",
            departure: "",
            budget: "",
            tag_ids: []
        },
        tagsSelected: {}
    };

    $scope.tags = [
        {id: 1,name: 'Natureza'},
        {id:2,name:'Gastronomia'},
        {id:3,name:'Vida Noturna'},
        {id:4,name:'Romântico'},
        {id:5,name:'Aventura'},
        {id:6,name:'Cultural'},
        {id:7,name:'Família'},
        {id:8,name:'Populares'}
        ];

    $scope.findItineraryGuide = function () {

        $scope.model.filter.tag_ids = [];

        angular.forEach($scope.tags,function (tag) {
            if( $scope.model.tagsSelected[tag.id] ) {
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