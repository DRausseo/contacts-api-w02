const Contact = require('../models/Contact');

// GET /contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /contacts/:id
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'No encontrado' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /contacts
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /contacts/:id
exports.updateContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true, runValidators: true }
    );
    if (!updatedContact) return res.status(404).json({ error: 'No encontrado' });
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /contacts/:id
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Contacto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
