import styleButton from './style.css';

import angular from 'angular';

export default angular
    .module('app.common.button',[])
    .component('appButton', {
        template: `<button class="{{ ::$ctrl.styleButton.button }}">Text</button>`,
        controller: class Button {
            constructor() {
                this.styleButton = styleButton;
            }
        }
    })
    .name;