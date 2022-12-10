import { RouterModule } from '@angular/router';
import { UploadFileModule } from './upload-file/upload-file.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DipComponent } from './dip/dip/dip.component';

@NgModule({
  declarations: [
    AppComponent,
    DipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadFileModule,
    RouterModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
