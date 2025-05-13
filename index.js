const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conecta a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Contactos funcionando');
});

// Importar rutas de contactos
const contactRoutes = require('./routes/contactRoutes');
app.use('/contacts', contactRoutes);

// Inicia servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
