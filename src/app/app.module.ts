import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Page1 } from './pages/page1.component';
import { Page2 } from './pages/page2.component';
import { Page3 } from './pages/page3.component';

import { PagesService } from './pages.service';



@NgModule({
  declarations: [
    AppComponent,
      Page1,
      Page2,
      Page3,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
