import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickcompComponent } from './clickcomp/clickcomp.component';
import { Clickarea1Component } from './clickarea1/clickarea1.component';
import { Clickarea2Component } from './clickarea2/clickarea2.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ButtonComponent } from './button/button.component';
import { CoordsPipe } from './coords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClickcompComponent,
    Clickarea1Component,
    Clickarea2Component,
    DialogboxComponent,
    ButtonComponent,
    CoordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
