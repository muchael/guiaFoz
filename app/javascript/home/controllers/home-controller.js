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
        {id: 1,name: 'Natureza', selected:false},
        {id:2,name:'Gastronomia', selected:false},
        {id:3,name:'Vida Noturna', selected:false},
        {id:4,name:'Romântico', selected:false},
        {id:5,name:'Aventura', selected:false},
        {id:6,name:'Cultural', selected:false},
        {id:7,name:'Família', selected:false},
        {id:8,name:'Populares', selected:false}
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