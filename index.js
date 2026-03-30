const express = require('express');
const app = express();

const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const usuarios = require('./routes/usuarios');

app.use(express.json());

app.use('/usuarios', auth, usuarios);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.use(errorHandler);

app.listen(4500, () => {
    console.log('Servidor escuchando en puerto http://localhost:4500');
});