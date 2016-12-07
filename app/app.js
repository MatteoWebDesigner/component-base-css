import './common/style/setting.css';
import './common/style/tool/tool.css';
import './common/style/element.css';
//import './style/layout/page.css';
// import 'style/component.css';
// import 'style/utility.css';
import stylePage from './common/style/layout/page.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import common from './common/module.js';

/* @ngInject */
function config($compileProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    $compileProvider.debugInfoEnabled(true);
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: `
                <app-header></app-header>
                
                <div class="${stylePage.pageContainer}">ciao</div>
                
                <div>HOME</div>
                <div>
                    <app-button></app-button>
                </div>
            `
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