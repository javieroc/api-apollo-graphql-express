import mongoose, { Schema } from 'mongoose';

const SpotSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  price: {
    type: Number,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Spot', SpotSchema);
