import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { EmptyComponent } from './empty.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { APP_BASE_HREF } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
@NgModule({
  declarations: [
    AppComponent, 
    EmptyComponent, PagesComponent,
    // LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule, 
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/ng7chunk'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
