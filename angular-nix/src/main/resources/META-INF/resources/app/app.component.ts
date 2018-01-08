import {ViewEncapsulation, Component} from '@angular/core';
import '../../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../../../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../../../../../node_modules/primeng/resources/primeng.min.css'

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
