import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,
  user_name: String,
  user_email: String,
  password: String,
});
