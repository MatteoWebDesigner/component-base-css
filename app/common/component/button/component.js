import './style.css';

import angular from 'angular';

export default angular
    .module('app.common.button',[])
    .component('appButton', {
        template: '<button class="app-c-button">Text</button>',
        controller: function() {
            
        }
    })
    .name;