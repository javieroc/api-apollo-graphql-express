import mongoose, { Schema } from 'mongoose';

const PlaceSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
}, {
  timestamps: true,
});

export default mongoose.model('Place', PlaceSchema);
