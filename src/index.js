// llamando al botón de encode para hacer la función
const respuestaCode=document.getElementById("sms");//respuesta codiicada en el p
const respuestaDecode=document.getElementById("sms2");//respuesta decodificada en el p
let string1=document.getElementById("input");// EL VALOR QUE SE INTRODUCE EN EL INPUT
let offset1=document.getElementById("offset"); // obtener offset y convirtiendo de string a number




  document.getElementById("encodeClick").addEventListener("click", obtenerDatos=()=>{
    let string=string1.value;
      let offset=parseInt(offset1.value);
      cipher.encode(offset,string);
      respuestaCode.innerHTML=cipher.encode(offset,string);

  } );


    document.getElementById("decodeClick").addEventListener("click", obtenerDatos=()=>{
      let string=string1.value;
        let offset=parseInt(offset1.value);
        cipher.decode(offset,string);
        respuestaDecode.innerHTML=cipher.decode(offset,string);
      });
