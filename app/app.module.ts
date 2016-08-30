import { NgModule }             from '@angular/core';
import { Http, HttpModule }     from '@angular/http';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
/*import {TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';*/

import { AppComponent }        from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';

import { HeroesModule }        from './heroes/heroes.module';

import { CategoriesModule }        from './categories/categories.module';

import { LoginComponent }      from './login.component';

import { DialogService }       from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*TranslateModule.forRoot(),*/
    routing,
    HeroesModule,
    CategoriesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    DialogService/*,
    { 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    },
    TranslateService*/
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}