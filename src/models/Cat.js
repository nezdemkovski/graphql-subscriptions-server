import mongoose from 'mongoose';

const CatSchema = mongoose.Schema({
  name: String,
  nickName: String,
  description: String,
  createdAt: String,
  avatarUrl: String,
  age: Number,
});

export default mongoose.model('Cat', CatSchema);
