import mongoose from 'mongoose'

const RequestTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this RequestType.'],
    maxlength: [100, 'RequestType cannot be more than 100 characters'],
  }
})

RequestTypeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default mongoose.model('RequestType', RequestTypeSchema)