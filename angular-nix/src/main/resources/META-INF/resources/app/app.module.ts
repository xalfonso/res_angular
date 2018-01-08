import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {GithubService} from './github/shared/github.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';


import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RepoBrowserComponent,
        RepoListComponent,
        RepoDetailComponent,
        HomeComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: true}),
        TabViewModule,
        BrowserAnimationsModule,
        ButtonModule,
        GrowlModule
    ],
    providers: [
        GithubService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
