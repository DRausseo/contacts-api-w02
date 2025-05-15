const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Rutas CRUD completas
router.get('/', contactController.getAllContacts);         // Leer todos
router.get('/:id', contactController.getContactById);      // Leer uno por ID
router.post('/', contactController.createContact);         // Crear
router.put('/:id', contactController.updateContact);       // Actualizar
router.delete('/:id', contactController.deleteContact);    // Eliminar

module.exports = router;

