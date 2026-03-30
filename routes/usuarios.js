const express = require('express');
const router = express.Router();
const { leerUsuarios, guardarUsuarios } = require('../helpers/storage');

//Get todos 
router.get('/', (req, res) => {
    res.json(leerUsuarios());

});


// get uno 
router.get('/:id', (req, res) => {
    const usuarios = leerUsuarios().find(u => u.id == req.params.id);

    if (!usuarios) {
        return res.status(404).json({ error: 'No encontrado' });
    }
    res.json(usuarios);

});

// post 
router.post('/', (req, res) => {
    const usuarios = leerUsuarios();
    const nuevo = {
        id: usuarios.length + 1,
        ...req.body
    };
    usuarios.push(nuevo);
    guardarUsuarios(usuarios);

    res.status(201).json(nuevo);
});

// put
router.put('/:id', (req, res) => {
    let usuarios = leerUsuarios();
    usuarios= usuarios.map(u => u.id == req.params.id ? { ...u, ...req.body } : u

    );

    guardarUsuarios(usuarios);
    res.json({ message: 'Actualizado' });


});

// delete
router.delete('/:id', (req, res) => {
    let usuarios = leerUsuarios();
    usuarios = usuarios.filter(u => u.id != req.params.id);

    guardarUsuarios(usuarios);
    res.json({ message: 'Eliminado' });
});

module.exports = router;