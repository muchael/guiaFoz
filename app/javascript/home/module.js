const deps = [
    require('angular-aria'),
    require('angular-messages'),
    require('angular-animate'),
    require('angular-material'),
    require('angular-ui-router'),   
    require('angular-input-masks')
];

const angular = require('angular');

module.exports = angular.module('home', deps);