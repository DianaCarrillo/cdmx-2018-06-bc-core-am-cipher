let string1=document.getElementById("input");// EL VALOR QUE SE INTRODUCE EN EL INPUT
let offset1=document.getElementById("offset"); // obtener offset y convirtiendo de string a number
// variables para aparecer y desaparecer botones e imputs
let botonCifrar=document.getElementById("encodeClick");
let botonDefifrar=document.getElementById("decodeClick");
let resultado=document.getElementById("sms");
let parrafoResultado=document.getElementById("cifradoDescifrado");
let botonReset=document.getElementById("cifradoDescifrado");

// ocultar reset y resultado antes de la función
resultado.style.display="none";
parrafoResultado.style.display="none";
botonReset.style.display="none";

// llamando a l click para que ejecute la función encode.
document.getElementById("encodeClick").addEventListener("click", obtenerDatos=()=>{
  let string=string1.value;
  let offset=parseInt(offset1.value);
  // cipher.encode(offset,string);
  resultado.value=cipher.encode(offset,string);

  // ocultar después del click
  string1.style.display="none";
  offset1.style.display="none";
  botonCifrar.style.display="none";
  botonDefifrar.style.display="none";
  // mostrar después del click
  resultado.style.display="block";
  parrafoResultado.style.display="block";
  botonReset.style.display="block";
});


document.getElementById("decodeClick").addEventListener("click", obtenerDatos=()=>{
  let string=string1.value;
  let offset=parseInt(offset1.value);
  cipher.decode(offset,string);
  resultado.value=cipher.decode(offset,string);

  // ocultar después del click
  string1.style.display="none";
  offset1.style.display="none";
  botonCifrar.style.display="none";
  botonDefifrar.style.display="none";
  // mostrar después del click
  botonReset.style.display="block";
  parrafoResultado.style.display="block";
  resultado.style.display="block";
});
