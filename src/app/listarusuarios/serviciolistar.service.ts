import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciolistarService {
    URL = 'http://localhost:8080/products'
    URL1 = 'http://localhost:8080/products/'

  constructor(private http: HttpClient) { }
  
  listarproductos(){
    return this.http.get(`${this.URL}`);
  }
   
  baja_usuario(_id:any){
    //alert("aaaaa"+_id);
    return this.http.delete(`${this.URL1}${_id}`);
  }

 
}
