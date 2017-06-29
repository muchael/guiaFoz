const angular = require('angular');
const module = require('./module');
require('angular-material/angular-material.css');

module.constant('$STATES', {
    HOME: 'home',
    SEARCH: 'search'
});

module.config(function($stateProvider, $urlRouterProvider, $STATES) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state($STATES.HOME, {
        url: '/',
        templateUrl: '/views/home/home.html',
        controller: 'HomeController'
    }).state($STATES.SEARCH, {
        url: '/search',
        templateUrl: '/views/search/search.html',
        controller: 'AttractionDetailController'
    });
});

module.controller('HomeController', require('./controllers/home-controller'));
module.controller('SearchController', require('./controllers/search-controller'));
module.controller('AttractionDetailController', require('./controllers/attraction-detail-controller'));