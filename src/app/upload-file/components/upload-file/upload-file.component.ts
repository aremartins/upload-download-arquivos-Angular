import { Component, OnInit } from '@angular/core';

import { UploadService } from './../../service/upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files!: Set<File>;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onChange(event: Event): void {
    const selectFiles = <FileList>(event.target as HTMLInputElement).files;
    //para um arquivo const arq = selectFiles ? selectFiles[0] : null

    document.getElementById('arqName')!.innerHTML = selectFiles[0].name;
    this.files = new Set();
    const fileNames = [];

    for (let i = 0; i < selectFiles.length; i++) {
      fileNames.push(selectFiles[i].name);
      this.files.add(selectFiles[i]);
      document.getElementById('arqName')!.innerHTML = fileNames.join(', ');
    }
  }

  onUpload(): void {
    this.uploadService
      .upload(this.files, 'http://localhost:8000/upload')
      .subscribe((response) =>
        console.log(response, 'Upload concluído', this.files.values)
      );
  }
}
