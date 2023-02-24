    import {calcularCopago} from './computos.js';

    let infoCopagos = [];

    // obtiene boton
    const boton = document.getElementById("ejecutar");

    // addEventListener a la referencia boton para que cuando se dé el evento click 
    // se ejecute la función procesarEntrada

    boton.addEventListener("click", procesarEntrada)


    function procesarEntrada(){
        // Incluir la lógica para computar y desplegar el impuesto
        let precio = document.getElementById("elPrecio").value;
        let salario = document.getElementById("elSalario").value;
        let procedimiento = document.getElementById("elProcedimiento").value;
    
        // Calcular copago
        let copago = calcularCopago(precio, salario);
    
        // Mostrar resultado en el elemento HTML
        document.getElementById("laRespuesta").value = `Para el procedimiento "${procedimiento}", el copago es de $${copago}.`;
    }
    
        
        



        // Incluir la lógica para crear nuevo objeto, adicionar al inicio
        // de la lista infoCopagos y desplegar por consola
    
            
            // Crear objeto y agregar al inicio de la lista infoCopagos
        let infoCopago = {
        procedimiento: procedimiento,
        precio: precio,
        salario: salario,
        copago: copago
        };
        infoCopagos.unshift(infoCopago);
            
        // Mostrar infoCopagos
        mostrarInfoCopagos();
          

    

