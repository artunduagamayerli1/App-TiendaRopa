import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ServiceformularioService {
  URL = 'http://localhost:8080/products'

  InsertarDatos(datosformulario: FormGroup<{ name: FormControl<string | null>; price: FormControl<string | null>; description: FormControl<string | null>; }>){
    //alert(datosformulario.value.name);
   //alert(datosformulario.value.price);
    //alert(datosformulario.value.expire_date);
    return this.http.post(`${this.URL}`,{"name":datosformulario.value.name, "price":datosformulario.value.price, "description":datosformulario.value.description})
  }

  constructor(private http: HttpClient) { }
}
