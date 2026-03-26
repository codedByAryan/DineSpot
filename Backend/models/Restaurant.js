import mongoose from "mongoose";


const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  cuisine: String,
  image: String,

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
   menu: [menuItemSchema],

}, { timestamps: true });

export default mongoose.model("Restaurant", restaurantSchema);