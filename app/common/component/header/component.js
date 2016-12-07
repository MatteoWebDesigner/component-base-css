import styleHeader from './style.css';
import styleButton from '../button/style.css';

import angular from 'angular';

export default angular
    .module('app.common.header',[])
    .component('appHeader', {
        template: `
            <div class="{{ ::$ctrl.styleHeader.header }}">
                this header
            </div>
        `,
        controller: class Header {
            constructor() {
                this.styleHeader = styleHeader;
                this.styleButton = styleButton;
            }
        }
        
        // function () {
        //     this.styleHeader = styleHeader;
        //     this.styleButton = styleButton;
        // }
        
    })
    .name;