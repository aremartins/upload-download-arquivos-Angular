import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onChange(event: Event): void {
    const selectFiles = <FileList>(event.target as HTMLInputElement).files;
    //para um arquivo const arq = selectFiles ? selectFiles[0] : null

    document.getElementById('arqName')!.innerHTML = selectFiles[0].name;

    const fileNames = [];

    for (let i = 0; i < selectFiles.length; i++) {
      fileNames.push(selectFiles[i].name);
      document.getElementById('arqName')!.innerHTML = fileNames.join(', ');
    }
  }
}
