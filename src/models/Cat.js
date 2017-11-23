import mongoose from 'mongoose';

const CatSchema = mongoose.Schema({
  name: String,
  nickName: String,
  description: String,
  createdAt: String,
  avatarUrl: String,
  age: Number,
});

export const sortArrayByDate = array => {
  return array.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export default mongoose.model('Cat', CatSchema);
