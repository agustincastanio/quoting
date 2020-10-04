import mongoose from 'mongoose'

const QuoteItemUnitTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this QuoteItemUnitType.'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  }
})

QuoteItemUnitTypeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('QuoteItemUnitType', QuoteItemUnitTypeSchema)