import { DipService } from './../dip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dip',
  templateUrl: './dip.component.html',
  styleUrls: ['./dip.component.scss'],
})
export class DipComponent implements OnInit {
  constructor(private dipService: DipService) {}

  ngOnInit(): void {}

  onDownload(): void {
    this.dipService.download().subscribe((res: any) => {
      console.log(res);
      const file = new Blob([res], {
        type: res.type,
      });

      const blob = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blob;
      link.download = 'nome-arquivo';
      link.click();
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      setTimeout(() => {
        window.URL.revokeObjectURL(blob);
        link.remove();
      });
    });
  }
}
