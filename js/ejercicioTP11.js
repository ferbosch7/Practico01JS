let numero = parseInt(prompt("ingrese un numero"));

if(numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0){
    document.write(numero + " es divisible por 2, 3, 5 y 7");
} else if(numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0){
    document.write(numero + " es divisible por 2, 3 y 5");
} else if(numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0){
    document.write(numero + " es divisible por 2, 3 y 7");
} else if(numero % 2 === 0 && numero % 3 === 0){
    document.write(numero + " es divisible por 2 y 3");
}else if(numero % 2 === 0 && numero % 5 === 0){
    document.write(numero + " es divisible por 2 y 5");
} else if(numero % 2 === 0 && numero % 7 === 0){
    document.write(numero + " es divisible por 2 y 7");
} else if(numero % 3 === 0 && numero % 5 === 0){
    document.write(numero + " es divisible por 3 y 5");
} else if(numero % 3 === 0 && numero % 7 === 0){
    document.write(numero + " es divisible por 3 y 7");
} else if(numero % 2 === 0){
    document.write(numero + " es divisible por 2");
} else if(numero % 3 === 0){
    document.write(numero + " es divisible por 3");
} else if(numero % 5 === 0){
    document.write(numero + " es divisible por 5");
} else if(numero % 7 === 0){
    document.write(numero + " es divisible por 7");
} else {
    document.write("el " + numero + " no es divisible por 2, 3, 5 y 7");
}