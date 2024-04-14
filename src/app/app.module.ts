import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AdminModule} from "./admin/admin.module";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FrontModule} from "./fornt-end/front.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FrontModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
