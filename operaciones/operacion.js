let num1 = prompt("NUMERO 1")
let num2 = prompt("NUMERO 2")
let operaciones = prompt("SUMAR, RESTAR, MULTIPLICAR O DIVIDIR? (introduce en mayusculas todas las letras)")

if (operaciones == "SUMAR"){
    let resultado = Number(num1) + Number(num2);
    alert(resultado);
}
else if (operaciones == "RESTAR"){
    let resultado = num1 - num2;
    alert(resultado);
}
else if (operaciones == "MULTIPLICAR"){
    let resultado = num1 * num2;
    alert(resultado);
}
else if (operaciones == "DIVIDIR"){
    let resultado = num1 / num2;
    alert(resultado);
}
else {
    alert("ERROR INTRODUCE SOLO SUMAR, RESTAR, MULTIPLICAR O DIVIDIR")
}
