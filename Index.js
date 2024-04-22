let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese un segundo número: "));
let num3 = parseFloat(prompt("Ingrese un tercer número: "));

let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);
let medio = (num1 + num2 + num3 - mayor - menor);

if(num1 === num2 && num2 === num3){
    console.log("Los números son iguales")
}else{
    console.log("Los números de mayor a menor son: " + mayor + ", " + medio + ", " + menor)
    console.log("Los números de menor a mayor son: " + menor + ", " + medio + ", " + mayor)
}