import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  director: String,
  goalAmount: Number,
  raisedAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Film', filmSchema);
