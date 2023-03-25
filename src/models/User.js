import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  }
});


export const User = mongoose.model("User", UserSchema);
