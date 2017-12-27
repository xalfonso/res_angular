import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InsertUserComponent} from './insert-user/insert-user.component';
import {ListUserComponent} from './list-user/list-user.component';

import {FieldsetModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [InsertUserComponent, ListUserComponent],
  exports: [InsertUserComponent, ListUserComponent],
})
export class AdminModule {
}
