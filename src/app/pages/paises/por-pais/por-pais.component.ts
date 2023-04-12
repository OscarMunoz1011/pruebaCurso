import { Component } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interfaces';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  error: boolean = false;
  public paises: Pais[] = []
  public paisesSugeridos: Pais[] = []
  mostrarSugerencias:boolean=false

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false
    this.error = false
    this.termino = termino
    this.paisService.buscarPais(this.termino).subscribe(resp => {
      this.paises = resp;
    }, (err) => {
      this.error = true
      this.paises = []
    })
  }

  sugerencias(termino:string){
    this.mostrarSugerencias=true
    this.error=false;
    this.termino = termino
    //crear sugerencias
    this.paisService.buscarPais(this.termino)
    .subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5)},
      (err) => {this.paisesSugeridos = []
      })
  }
}
