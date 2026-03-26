import mongoose from "mongoose";


const orderedItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  date: String,
  time: String,
  guests: Number,
  orderedItems: [orderedItemSchema],

  totalAmount: {
      type: Number,
      default: 0,
    },
    
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);