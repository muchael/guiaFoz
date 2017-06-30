const angular = require('angular');
const module = require('./module');
require('jquery/dist/jquery');
require('angular-material/angular-material.css');
require('material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff');
require('material-design-iconic-font/dist/css/material-design-iconic-font.css');

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
        controller: 'SearchController'
    });
});

module.controller('HomeController', require('./controllers/home-controller'));
module.controller('SearchController', require('./controllers/search-controller'));
module.controller('AttractionDetailController', require('./controllers/attraction-detail-controller'));

// Ativa o service Worker
if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.hostname === 'localhost')) {

  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(registration) {
    if (typeof registration.update == 'function') {
      registration.update();
    }
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });

}
