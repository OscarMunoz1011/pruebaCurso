import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) {

  }

  buscar() {
    const valor = this.txtTermino.nativeElement.value;
    if( valor.trim().length === 0){
      return;
    }

    

    this.txtTermino.nativeElement.value = '';

    this.gifsServices.buscarGifs(valor);

  }
}
