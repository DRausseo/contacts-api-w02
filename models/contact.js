const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Por favor ingresa un correo válido',
      ],
    },
    phone: {
      type: String,
      required: [true, 'El teléfono es obligatorio'],
      trim: true,
      minlength: [7, 'El teléfono debe tener al menos 7 dígitos'],
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

module.exports = mongoose.model('Contact', contactSchema);

