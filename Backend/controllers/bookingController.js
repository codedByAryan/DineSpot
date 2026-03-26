import Booking from "../models/Booking.js";
import Restaurant from "../models/Restaurant.js";

// ➕ Create Booking (User)
export const createBooking = async (req, res) => {
  try {
    const { restaurantId, date, time, guests, orderedItems } = req.body;

    const totalAmount = orderedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );


    const booking = await Booking.create({
      user: req.user.id,
      restaurant: restaurantId,
      date,
      time,
      guests,
      orderedItems,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 👤 User Bookings
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("restaurant", "name location");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🧑‍💼 Owner Bookings (IMPORTANT)
export const getOwnerBookings = async (req, res) => {
  try {
    // Find restaurants owned by this owner
    const restaurants = await Restaurant.find({ owner: req.user.id });

    const restaurantIds = restaurants.map(r => r._id);

    const bookings = await Booking.find({
      restaurant: { $in: restaurantIds }
    })
    .populate("user", "name email")
    .populate("restaurant", "name");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};