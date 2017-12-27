import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsertUserComponent} from './admin/insert-user/insert-user.component';
import {ListUserComponent} from './admin/list-user/list-user.component';
import {InsertArticleComponent} from './sale/insert-article/insert-article.component';
import {AdminModule} from './admin/admin.module';
import {SaleModule} from './sale/sale.module';

const routes: Routes = [
  {path: 'insertUser', component: InsertUserComponent}, /*Admin Routes*/
  {path: 'listUser', component: ListUserComponent},
  {path: 'insertArticle', component: InsertArticleComponent} /*Sale Routes*/
];



@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModule, SaleModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
