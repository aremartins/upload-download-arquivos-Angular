import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UploadFileComponent } from './components/upload-file/upload-file.component';



@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [UploadFileComponent]
})
export class UploadFileModule { }
