const express = require('express')
const morgan = require('morgan')
const categoriarouter = require('./routes/categorias.routes')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(categoriarouter)

app.listen(4000)
console.log('el puerto 4000 es del servidor de backend')
