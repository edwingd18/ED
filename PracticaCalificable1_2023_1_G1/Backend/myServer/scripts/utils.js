/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 6-Febrero-2023
*
*  Descripción: 
*  Proporciona funciones variadas para computo y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

function crearPaginaCuadrado(valor){
	// Calcular el cuadrado y asugnarlo a la variable respuesta
	const respuesta = 0;
	
	const nPage = '<!DOCTYPE html>'+
		'<head>'+
		'    <title>Ejemplo Backend</title>'+
		'</head>'+
		'<body>'+
		'    <main>'+ 
		'        <h1>Computo de Cuadrados</h1>'+
		'        <form action="/parcial1" enctype="application/x-www-form-urlencoded" method="post">'+
		'            Valor'+
		'            <input type="text" value="'+valor+'" name="elValor">'+
		'			<input type="submit"  value="Calcular">'+
		'        </form><br>'+
		'		<textarea cols="25" rows="2">El cuadrado es '+respuesta+'</textarea><br>'+
		'        <hr>'+   
		'    </main>'+
		'    <footer>'+
		'        <p> <small>Fuente propia para el curso de Estructura de Datos 1 en la Universidad Autónoma de Occidente</small> </p>'+
		'    </footer>'+
		'</body>'
    return nPage;	
}

// se indican las funciones a importar
module.exports = {crearPaginaCuadrado};



