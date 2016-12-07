import angular from 'angular';
import header from './component/header/component.js';
import button from './component/button/component.js';

export default angular.module('app.common', [
    header,
    button
]).name;