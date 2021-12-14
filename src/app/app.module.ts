import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavHeaderComponent } from './layout/header/navheader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './layout/body/body.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  HttpClientModule ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  NavHeaderComponent,
                  SidebarComponent,
                  FooterComponent,
                  BodyComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
