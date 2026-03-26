import Restaurant from "../models/Restaurant.js";

// ➕ Add Restaurant (Owner only)
export const addRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine, image } = req.body;

    const restaurant = await Restaurant.create({
      name,
      location,
      cuisine,
      image,
      owner: req.user.id
    });

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📋 Get All Restaurants (User side)
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate("owner", "name email");
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 Get Single Restaurant
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ Update Restaurant (Owner only)
export const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Not found" });
    }

    // Check owner
    if (restaurant.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updated = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ Delete Restaurant (Owner only)
export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Not found" });
    }

    if (restaurant.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await restaurant.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// 👤 Owner ke restaurants
export const getOwnerRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ owner: req.user.id });

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateRestaurantMenu = async (req, res) => {
  try {
    const { menu } = req.body;

    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    if (restaurant.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    restaurant.menu = menu;
    await restaurant.save();

    res.status(200).json({
      message: "Menu updated successfully",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

