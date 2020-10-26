import mongoose from 'mongoose';
import Currency from './Currency'
import Category from './Category'
import AddressType from './AddressType'
import RequestType from './RequestType'
import QuoteStatus from './QuoteStatus'
import QuoteItem from './QuoteItem'

const QuoteSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, 'Please provide an address for this Quote.'],
    maxlength: [100, 'Address cannot be more than 100 characters'],
  },
  city: {
    type: String,
    required: [true, 'Please provide a city for this Quote.'],
    maxlength: [100, 'City cannot be more than 100 characters'],
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: QuoteStatus
  },
  addressType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AddressType
  },
  requestType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: RequestType
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category
  },
  referencetotal: {
    type: Number
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Currency
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: QuoteItem
    },
    quantity: Number
  }]
})

QuoteSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
    ret.items.forEach(function (item) {
      delete item.__v;
      item.id = item._id.toString();
      delete item._id;
    });
  },
});

export default mongoose.models.Quote || mongoose.model('Quote', QuoteSchema)