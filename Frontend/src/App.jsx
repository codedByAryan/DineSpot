import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import OwnerDashboard from "./pages/OwnerDashboard";
import MyBookings from "./pages/MyBookings";
import ManageMenu from "./pages/ManageMenu";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";



function App() {
  return (
     <>
     <Navbar />
    <Routes>
      
      <Route path="/" element={<HomePage />} />
     <Route path="/restaurants" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/owner" element={<OwnerDashboard />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/owner/menu/:id" element={<ManageMenu />} />
    </Routes>

    <Footer />
  
    </>
  );
}

export default App;