import mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this Currency.'],
    maxlength: [100, 'Currency cannot be more than 100 characters'],
  },
  ISO4217Code: {
    type: String,
    required: [true, 'Please provide an ISO4217Code for this Currency.'],
    maxlength: [10, 'Currency cannot be more than 10 characters'],
  }
})

CurrencySchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('Currency', CurrencySchema)