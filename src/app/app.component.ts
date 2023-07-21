import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';
  nombrePersona = "Javier";
  apellidoPersona = "Hernández";
  propiedadNumero = "23";
  contador: number = 0;

  listaCanciones: string[] = [
   "Canción 1",
   "Canción 2",
   "Canción 3",
   "Canción 4",
   "Canción 5",
  ];

  renombrarPersona() {
    this.nombrePersona = "Juan";
    this.apellidoPersona = "Perez";
  }

  clickContador() {
    this.contador += 1;
  }
  clickContadorResta() {
    this.contador -= 1;
  }

}
