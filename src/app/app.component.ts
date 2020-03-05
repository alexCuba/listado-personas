import { Component } from '@angular/core';
import { Persona } from './personas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Alexander","Valdes"), new Persona("Susana","valdes")];

  onPersonaAgregada(persona: Persona){
    this.personas.push(persona);
  }
<<<<<<< HEAD

  clearList(persona: Persona[]){
    persona = [];
    this.personas = persona;  
  }
}
=======
}
>>>>>>> master
