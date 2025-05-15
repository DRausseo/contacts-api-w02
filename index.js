const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Contactos funcionando');
});

// Rutas de contactos
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
  console.log(`📚 Swagger docs en http://localhost:${PORT}/api-docs`);
});
