import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this Category.'],
    maxlength: [100, 'Category cannot be more than 100 characters'],
  }
})

CategorySchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('Category', CategorySchema)