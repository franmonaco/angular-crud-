import { Component } from '@angular/core';
import { CallTracker } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // estas propiedades son para el 2ble enlace de datos.
  name: string = 'Francisco Monaco';
  age: number= 22;

  users: string[] = ['nom1','nomb2','nomb3'];

  eliminarUsiario(user: string){
    for(let i = 0 ; i<this.users.length ; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  agregarUsuario(nuevoUsuario: { value: string; focus: () => void; },value:string){
    this.users.push(nuevoUsuario.value)
    nuevoUsuario.value = '';
    nuevoUsuario.focus();
    return false;
  }
  

}
