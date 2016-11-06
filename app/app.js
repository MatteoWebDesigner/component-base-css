import angular from 'angular';
import uirouter from 'angular-ui-router';
import common from './common/module.js';

/* @ngInject */
function config ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<div>HOME</div><div><app-button></app-button></div>'
        })
        .state('about', {
            url: '/about',
            template: '<div>ABOUT</div>'
        });
};

angular
.module('app', [
    uirouter,
    common
])
.config(config);