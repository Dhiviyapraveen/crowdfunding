import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);
