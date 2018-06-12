// llamando al botón de encode para hacer la función
const string= document.getElementById("input");//toUpperCase()
const offset=document.getElementById("offset");
const respuestaCode=document.getElementById("sms");
const respuestaDecode=document.getElementById("sms2");
let vacia1="";
let vacia2="";

// Función para el botón de encriptar
const encode = ()=>{

    const string1=string.value;//llamando al valor del string ingresado
    const offset1=parseInt(offset.value); //llamando al valor y convirtiendo de string a number
    for(let i=0;i<string1.length;i++){//iterando cada letra para que haga:
      let asciiNumber = string1[i].charCodeAt();//definiendo variable para el número convertido en ASCII
      // mayúsculas
      if(65<=asciiNumber && asciiNumber<=90){//si el número ascii está entre 65 y 90 (o es =)
        let shiftPosition=(asciiNumber-65+offset1)%26+65;//entonces aplica la fórmula para cifrar y obtener el numero Cifrado
        vacia1+=String.fromCharCode(shiftPosition);//convierte la posición ascci en letra
        // console.log(vacia1);
        // respuestaCode.innerHTML+=asciiLetter;

      }else if (97<=asciiNumber&& asciiNumber<=122){//si está entre 97 y 122 en ascii
        let shiftPosition=asciiNumber-97+offset1%26+97;//aplica fórmula para saber la posición ascii actual
        vacia1+=String.fromCharCode(shiftPosition);//convierte la posición en letra
        // console.log(vacia1);

        // respuestaCode.innerHTML+=asciiLetter;
      }else if(asciiNumber===32){//si el numero ascii es igual a 32 (espacio en ascii)
        vacia1+=String.fromCharCode(asciiNumber);//devuelve el espacio
        // console.log(vacia1);
    }else{
        vacia1+=String.fromCharCode(asciiNumber);//cualquier otro caso, no codificar
    }
  }
 return respuestaCode.innerHTML=vacia1; //imprimir en el dom los caracteres en ascii
}
encode(string,offset);//utiliza estos

// Función para desencriptar
    const decode=()=>{
        const string1=string.value;
        const offset1=parseInt(offset.value);
        for(let i=0;i<string1.length;i++){
          let asciiNumber= string1[i].charCodeAt();
    // mayúsculas
        if(65<=asciiNumber && asciiNumber<=90){
          let shiftPosition=(asciiNumber-90-offset1)%26+90;//hasta ahora el procedimiento es el mismo, sin embargo la formula
      vacia2+=String.fromCharCode(shiftPosition);
        // console.log(vacia2);
      // minúscula
        }else if (asciiNumber>=97 && asciiNumber<=122){
          let shiftPosition=(asciiNumber-122-offset1)%26+122;
      vacia2+=String.fromCharCode(shiftPosition);
        // console.log(vacia2);

        }else if(asciiNumber===32){
          vacia2+=String.fromCharCode(asciiNumber);
          // console.log(vacia2);

        }else{
          vacia2+=String.fromCharCode(asciiNumber);
    }
  }
return respuestaDecode.innerHTML+=vacia2; //devuelve impreso en el dom los caracteres en ASCII
}
decode(string,offset);
