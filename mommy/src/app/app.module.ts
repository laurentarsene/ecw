import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { ActivityComponent } from './activity/activity.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';

import {MatTabsModule} from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivityComponent,
    PagenotfoundComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FontAwesomeModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
