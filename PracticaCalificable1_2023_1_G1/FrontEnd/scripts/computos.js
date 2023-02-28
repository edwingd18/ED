const SMMLV = 1000000;

function calcularCopago(precio,salario){
    if (salario < SMMLV*2){
        precio = precio *0.12
    }
    else if (salario >= SMMLV*2 && salario <= SMMLV*5){
        precio = precio *0.24
    }
    else if (salario > SMMLV*5){
        precio = precio*0.36
    }

    return precio
}


export {calcularCopago};