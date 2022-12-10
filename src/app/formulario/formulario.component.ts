import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceformularioService } from './serviceformulario.service';

declare var validar_nombre:any;
declare var validar_price:any;
//declare var validar_email:any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  titulo="Formulario Registrar";

  datosformulario = new FormGroup({
    name: new FormControl(''),
    //email: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),

  });

  recibirdatos(){
    var name1 = this.datosformulario.value.name;
    var price1 = this.datosformulario.value.price;
    //var email1 = this.datosformulario.value.email;
    var descrip = this.datosformulario.value.description;
    let p=0
   
    if(name1 == ""){
      alert("Debe digitar un nombre");
    //}else{
    // if(email1=="" ){
    //  alert("Debe digitar un email"); 
     
    }else{
     if(price1==""){
      alert("Debe digitar un precio");
    }else{
      if(descrip == ""){
        alert("Debe escribir la descripcion del producto.");
    }else{
      var rta = validar_nombre(name1);
      if(rta == false){
      alert("Digite solo letras en el nombre");
      }else{
      //alert("Esta bien escrito");
      p = p + 1;
      }
      var rta = validar_price(price1);
      if(rta == true){
       alert("Digite solo numeros en el precio");
      }else{
      p = p + 1;
      //alert("Esta bien escrito");
      }

       //var rta = validar_email(email1);
       //if(rta == false){
       // alert("Digite un email correcto");
       //}else{
        //p = p + 1;
      //alert("Esta bien escrito");
       }
    
       if(p==2){
        alert("formulario diligenciado correctamente");
        this.serviceformularioservice.InsertarDatos(this.datosformulario).subscribe(datos => {alert("Se inserto con exito");});
       }
  }
    }
  }
  constructor(private serviceformularioservice : ServiceformularioService){}
  ngOnInit():void{}
}
 // } 

//}
