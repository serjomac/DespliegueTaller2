import { Component } from '@angular/core';

import { Mascotas } from './models/mascotas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mascotasArray: Mascotas[] = [
    {id:1,name:"Jonathan",color:"Ecuador",age:1},
    {id:2,name:"Carlos",color:"Peru",age:2},
  ];

  selectMascota: Mascotas = new Mascotas();
  addOrEdit(){
    if(this.selectMascota.id===0){
      this.selectMascota.id= this.mascotasArray.length+1;
      this.mascotasArray.push(this.selectMascota);
    }
    
    this.selectMascota = new Mascotas();
  }
  openForEdit(mascota : Mascotas){
    this.selectMascota=mascota;
  }
  borrar(){
    if(confirm("¿Estas seguro de borrar?")){
      this.mascotasArray = this.mascotasArray.filter(x=> x != this.selectMascota);
      this.selectMascota = new Mascotas();
    }
    
  }
}
