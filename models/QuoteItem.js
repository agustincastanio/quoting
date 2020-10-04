import mongoose from 'mongoose';
import QuoteItemUnitType from './QuoteItemUnitType'
import Currency from './Currency'

const QuoteItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this QuoteItem.'],
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  unitType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: QuoteItemUnitType
  },
  additionalInfo: {
    type: String,
    maxlength: [100, 'AdditionalInfo cannot be more than 100 characters'],
  },
  referencePrice: {
    type: Number
  },
  referencePriceUnity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Currency
  },
})

QuoteItemSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('QuoteItem', QuoteItemSchema)