import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
  })
};