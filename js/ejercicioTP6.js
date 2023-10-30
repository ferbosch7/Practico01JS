let primerNumero = parseInt(prompt("ingrese un numero"));
let segundoNumero = parseInt(prompt("ingrese otro numero"));

if(primerNumero > segundoNumero){
    document.write(primerNumero + " es el número mayor");
} else if (primerNumero < segundoNumero){
    document.write(segundoNumero + " es el número mayor");
}