import express from "express";
import {
  createBooking,
  getUserBookings,
  getOwnerBookings
} from "../controllers/bookingController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// User booking
router.post("/", protect, createBooking);
router.get("/my", protect, getUserBookings);

// Owner bookings
router.get("/owner", protect, getOwnerBookings);

export default router;