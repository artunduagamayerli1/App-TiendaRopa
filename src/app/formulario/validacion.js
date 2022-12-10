function validar_nombre(name2){
  name2 = name2.toLowerCase();

  for(x=0; x<name2.length;x++){
    c = name2.charAt(x);
     if(!(c>='a' && c<='z')|| (c>='A' && c<='Z')){
          return false; //son numeros
     }
  }
  return true; // solo letras

}




function validar_price(price1){
  
  for(x=0; x<price1.length;x++){
    c = price1.charAt(x);
     if((c>='a' && c<='z')|| (c>='A' && c<='Z')){
          return true; //solo letras
     }
  }
  return false; // solo numeros

}

function validar_email(email1){
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email1)){
  
    return true;//esta bien
  }else{
    return false; //esta mal
  }
}