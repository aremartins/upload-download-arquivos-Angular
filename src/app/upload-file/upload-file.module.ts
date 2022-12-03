import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
