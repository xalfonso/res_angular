import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsertUserComponent} from './insert-user/insert-user.component';
import {ListUserComponent} from './list-user/list-user.component';

import {FieldsetModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FieldsetModule
  ],
  declarations: [InsertUserComponent, ListUserComponent],
  exports: [InsertUserComponent, ListUserComponent],
})
export class AdminModule {
}
