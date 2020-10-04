import mongoose from 'mongoose'

const QuoteStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this QuoteStatus.'],
    maxlength: [100, 'QuoteStatus cannot be more than 100 characters'],
  }
})

QuoteStatusSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('QuoteStatus', QuoteStatusSchema)