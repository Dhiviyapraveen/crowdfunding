const Message = require('../models/Message');

exports.submitMessage = async (req, res) => {
  try {
    await Message.create(req.body);
    res.status(201).json({ msg: 'Message received' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};