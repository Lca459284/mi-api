const fs = require('fs');
const path = require('path');

const RUTA = path.join(__dirname, '../data/usuarios.json');

function leerUsuarios() {
    return JSON.parse(fs.readFileSync(RUTA, 'utf-8'));
}

function guardarUsuarios(data) {
    fs.writeFileSync(RUTA, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
    leerUsuarios,
    guardarUsuarios
};
