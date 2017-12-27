import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsertArticleComponent} from './insert-article/insert-article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsertArticleComponent],
  exports: [InsertArticleComponent]
})
export class SaleModule {
}
