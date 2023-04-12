import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGifsComponent } from './pagina-gifs/pagina-gifs.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ImagenesGifsComponent } from './imagenes-gifs/imagenes-gifs.component';




@NgModule({
  declarations: [
    PaginaGifsComponent,
    BuscadorComponent,
    ImagenesGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginaGifsComponent
  ]
})
export class GifsModule { }
