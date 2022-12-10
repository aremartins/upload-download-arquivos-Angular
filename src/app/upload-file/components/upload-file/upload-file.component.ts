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

  /**primeira coisa instanciar um arquivo do tipo blob e passa no parâmetro o res e o tipo
  //do arquivo

  /*vamos pegar a URL da janela e passar o arquivo como parâmetro
  /*window.URL.createObjectURL(file)
  //o método createObjectURL() cria um link usando um objeto, por isso passamos o file como parâmetro

  //vamos criar um link via Dom do Javascript
  //document.createElement('a')

  // passar par o href a url do arquivo
  //link.href = fileURL

  //passar o nome do arquivo para download
  //link.download = 'nome do arquivo'

  //link.click() para clicar no link

  //window.URL.revokeObjectURL(fileURL) para revogar a url do arquivo

  //link.remove() para remover o link do DOM

  //Para suport a todos os navegadores vamos usar o MouseEvent
  //link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))
  //e criamos um setTimeout para remover o link do DOM
  **/

  downloadPDF() {
    this.uploadService
      .download('http://localhost:8000/downloadPDF')
      .subscribe((res) => {
        const file = new Blob([res], { type: res.type });
        const fileURL = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileURL;
        // link.download = 'contratoFrozen.pdf'
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );

        setTimeout(() => {
          window.URL.revokeObjectURL(fileURL);
          link.remove();
        });
      });
  }
}
