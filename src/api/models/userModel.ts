import mongoose from 'mongoose';
import {User} from '../../types/DBTypes';

const userSchema = new mongoose.Schema<User>({
  user_name: {
    type: String,
    minlength: [3, 'Username must be at least 3 characters'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: [4, 'Password must be at least 4 characters'],
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin', 'manager'],
  },
  organization: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model<User>('User', userSchema);

// Ensure that the unique index is created
userModel.ensureIndexes();

export default userModel;
