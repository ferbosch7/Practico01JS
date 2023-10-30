let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));

if(num1 > num2 && num1 > num3){
    document.write(num1 + " es el numero mayor");
}else if(num2 > num1 && num2 > num3){
    document.write(num2 + " es el numero mayor");
}else{
    document.write(num3 + " es el numero mayor");
}