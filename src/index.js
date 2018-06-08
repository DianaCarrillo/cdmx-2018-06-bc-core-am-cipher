/*crear dos const str (strEncode y strDecode)
que contenga el string que se ingresa en el input
para después utilizarla en mis 2 funciones.
 Quiero que mi función cuente el número de caracteres de un string


*/
//const strEncode = document.getElementById("encripting");
// const srtDecode = document.getElementById("encripting");

// const encodeClick= (strEnconcode)=>{
//
// }
// strEncode("A");


const encodeClick = ()=>{
  const str1= document.getElementById("encripting").value;
  const str2=str1.toUpperCase();
  const valorFijo=document.getElementById("offset").value;
  for(let i=0;i<str2.length; i++){
      const asciiPosition= str2.charCodeAt(i);
      const shiftPosition=asciiPosition-65+valorFijo%26+65;
      const asciiLetter= String.fromCharCode(shiftPosition);
      document.getElementById("sms").innerHTML+=asciiLetter;
   //i es igual al índice del caracter
  }
 //document.getElementById("sms").innerHTML=asciiLetter;
}

 const decodeClick = ()=>{
 const str3=document.getElementById("encripting").value;
 const str4=str3.toUpperCase();
 const valorFijo1=document.getElementById("offset").value;
 for(let i=0; i<str4.length; i++){
    const asciiPosition1= str4.charCodeAt(i);
      const shiftPosition1= (asciiPosition1+65-valorFijo1)%26+65;
      const asciiLetter1=String.fromCharCode(shiftPosition1);
      // const asciiLetter1= String.fromCharCode(shiftPosition1);
     console.log(asciiLetter1);
       document.getElementById("sms2").innerHTML+=asciiLetter1;
    }

}

// const decodeClick = ()=>{
// const str3=document.getElementById("encripting").value;
// //le quité touppercase;
// const valorFijo1=document.getElementById("offset").value;
// for(let i=0; i<str3.length; i++){
//    const asciiPosition1= str3.charCodeAt(i);
//    if(asciiPosition1<=65 && asciiPosition1<=90){
//      const shiftPosition1= (asciiPosition1+65-valorFijo1)%26+65;
//      // const asciiLetter1= String.fromCharCode(shiftPosition1);
//     console.log(shiftPosition1);
//      // document.getElementById("sms2").innerHTML+=asciiLetter1;
//    }
//Quiero
//Ya tengo la posción de la letras en ACII, ahora falta convertilo a letra
// Quiero que lo que ingrese el usuario en el input id"offset" se lo sume al str2-65
// a eso, le sacamos % de 26 y le sumamos 65
