import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsertUserComponent, ListUserComponent]
})
export class AdminModule { }
