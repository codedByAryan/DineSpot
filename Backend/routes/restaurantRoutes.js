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

// Owner
router.post("/", protect, addRestaurant);
router.put("/:id", protect, updateRestaurant);
router.delete("/:id", protect, deleteRestaurant);
router.get("/owner", protect, getOwnerRestaurants);
router.put("/:id/menu", protect, updateRestaurantMenu);

// User
router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);

export default router;