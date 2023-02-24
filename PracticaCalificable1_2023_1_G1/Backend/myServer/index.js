const misFunciones = require('./scripts/utils')

// importa a express y cors
const express = require('express')
const cors = require('cors')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

//#region 
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(
  express.json({
    type: "*/*"
  })
)

app.use(cors());
//#endregion

// Routes
// Ajustar ruta
app.get('/', (req, res) => {
  // obtener el cuadrado de 100 y enviarlo al usuario (con el método send)


})
 
// Ajustar ruta
app.post('/', (req, res) => {
  const transaction = req.body;

  // tomar valor, obtener su cuadrado y enviarsela al usuario (con el método send)


})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Servidor en ejecución');
})