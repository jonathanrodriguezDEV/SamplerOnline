import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteTitleComponent } from './site-title/site-title.component';
import { SiteNavigationComponent } from './site-navigation/site-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteTitleComponent,
    SiteNavigationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
