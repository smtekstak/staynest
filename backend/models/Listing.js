const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['Trending', 'Rooms', 'Mountains', 'Castles', 'Lake', 'Camping', 'Amazing Views', 'Iconic Cities', 'Farms', 'Beach', 'Luxury'], default: 'Trending' },
  image: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, default: 4.5 },
  reviews: { type: Number, default: 0 },
  guests: { type: Number, default: 4 },
  bedrooms: { type: Number, default: 2 },
  bathrooms: { type: Number, default: 1 },
  amenities: [String],
  host: {
    name: String,
    avatar: String,
    joined: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
