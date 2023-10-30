let num1 = prompt("INTRODUCE EL NUMERO 1");
let num2 = prompt("INTRODUCE EL NUMERO 2");

if (num1 != 0 && num2 != 0) {
    alert("NO PUEDES INTRODUCIR 0");
}

else{
    let resultado = num1 / num2;
    alert(resultado)
}