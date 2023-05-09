import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TabsComponent,
    CookieConsentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


