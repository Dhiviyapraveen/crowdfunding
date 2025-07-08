import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  contributions: [
    {
      user: String,
      amount: Number,
      date: Date
    }
  ]
});

export default mongoose.model('Film', filmSchema);
