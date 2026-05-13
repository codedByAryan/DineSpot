import express from "express";
import {
  addRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  getOwnerRestaurants,
  updateRestaurantMenu
} from "../controllers/restaurantController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Static routes FIRST
router.get("/", getRestaurants);
router.get("/owner", protect, getOwnerRestaurants);  // moved up

// ✅ Dynamic :id routes LAST
router.get("/:id", getRestaurantById);
router.post("/", protect, addRestaurant);
router.put("/:id", protect, updateRestaurant);
router.delete("/:id", protect, deleteRestaurant);
router.put("/:id/menu", protect, updateRestaurantMenu);

export default router;