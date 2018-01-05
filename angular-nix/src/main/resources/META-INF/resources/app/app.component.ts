import {Component} from '@angular/core';
import {ViewEncapsulation} from "@angular/compiler/src/core";

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: [
        '../../../../../../node_modules/font-awesome/css/font-awesome.min.css',
        '../../../../../../node_modules/primeng/resources/themes/omega/theme.css',
        '../../../../../../node_modules/primeng/resources/primeng.min.css'
    ],
})
export class AppComponent {
}
