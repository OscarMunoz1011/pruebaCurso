import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-imagenes-gifs',
  templateUrl: './imagenes-gifs.component.html',
  styleUrls: ['./imagenes-gifs.component.css']
})
export class ImagenesGifsComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {

  }
}
