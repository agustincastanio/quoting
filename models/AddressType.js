import mongoose from 'mongoose'

const AddressTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this AddressType.'],
    maxlength: [100, 'AddressType cannot be more than 100 characters'],
  }
})

AddressTypeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.models.AddressType || mongoose.model('AddressType', AddressTypeSchema)