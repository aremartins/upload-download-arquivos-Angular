import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DipService {
  private readonly dipsApiUrl =
    'https://visaoinvestidor-bin-dev.cloud.itau.com.br/gestao_comercial-investidores/v1/investors';

  constructor(private httClient: HttpClient) {}

  download() {
    return this.httClient.get(this.dipsApiUrl, { responseType: 'blob' });
  }

  onDownload() {
    return this.httClient.get(this.dipsApiUrl, { responseType: 'blob' }).pipe(
      map((res) => {
        const file = new Blob([res], {
          type: res.type,
        });

        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = 'nome-arquivo';
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      })
    );
  }
}
