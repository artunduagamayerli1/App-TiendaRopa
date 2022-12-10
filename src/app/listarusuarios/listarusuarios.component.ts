import { Component, OnInit } from '@angular/core';
import { ServiciolistarService } from './serviciolistar.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {
     
     datosformulario:any = null;

     constructor(private serviciolistarservice: ServiciolistarService){}
     
     ngOnInit(): void {
     this.listarproductos();
     }

     baja_usuario(_id:any){
      this.serviciolistarservice.baja_usuario(_id).subscribe(datos => {alert("Se elimino con exito");})
     }

     listarproductos(){
      this.serviciolistarservice.listarproductos().subscribe(datos => this.datosformulario = datos);
     }

     hayproductos(){
      if(this.datosformulario == ""){
          return false;
      }else{
          return true;
      }
     }

}
