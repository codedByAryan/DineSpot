// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";


// function OwnerDashboard() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//     const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     cuisine: ""
//   });

//   // 🔹 Fetch owner restaurants
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await API.get("/restaurants/owner");
//       setRestaurants(res.data);
//     };
//     fetchData();
//   }, []);

//   // 🔹 Fetch bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       const res = await API.get("/bookings/owner");
//       setBookings(res.data);
//     };
//     fetchBookings();
//   }, []);

//   // 🔹 Add / Update Restaurant
//   const handleAdd = async () => {
//     try {
//       if (editingId) {
//         // ✏️ Update
//         await API.put(`/restaurants/${editingId}`, form);
//         alert("Updated Successfully");
//         setEditingId(null);
//       } else {
//         // ➕ Add
//         await API.post("/restaurants", form);
//         alert("Restaurant Added");
//       }

//       // Refresh restaurants
//       const res = await API.get("/restaurants/owner");
//       setRestaurants(res.data);

//       // Reset form
//       setForm({ name: "", location: "", cuisine: "" });

//     } catch (error) {
//       alert("Error");
//     }
//   };

//   // 🔹 Edit Restaurant
//   const handleEdit = (restaurant) => {
//     setEditingId(restaurant._id);

//     setForm({
//       name: restaurant.name,
//       location: restaurant.location,
//       cuisine: restaurant.cuisine
//     });
//   };

//   // 🔹 Delete Restaurant
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       await API.delete(`/restaurants/${id}`);
//       alert("Deleted Successfully");

//       const res = await API.get("/restaurants/owner");
//       setRestaurants(res.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Owner Dashboard</h2>

//       {/* 🔹 Add / Edit Form */}
//       {restaurants.length === 0 || editingId ? (
//         <div>
//           <h3>{editingId ? "Edit Restaurant" : "Add Restaurant"}</h3>

//           <input
//             placeholder="Name"
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />

//           <input
//             placeholder="Location"
//             value={form.location}
//             onChange={(e) =>
//               setForm({ ...form, location: e.target.value })
//             }
//           />

//           <input
//             placeholder="Cuisine"
//             value={form.cuisine}
//             onChange={(e) =>
//               setForm({ ...form, cuisine: e.target.value })
//             }
//           />

//           <button onClick={handleAdd}>
//             {editingId ? "Update Restaurant" : "Add Restaurant"}
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h3>Your Restaurants</h3>

//           {restaurants.map((r) => (
//             <div key={r._id}>
//               <h4>{r.name}</h4>
//               <p>{r.location}</p>

//               <button onClick={() => handleEdit(r)}>Edit</button>
//               <button onClick={() => handleDelete(r._id)}>Delete</button>
//               <button onClick={() => navigate(`/owner/menu/${r._id}`)}>Manage Menu</button>
              
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 🔹 Bookings Section */}
//       <h3>Bookings</h3>

//       {bookings.map((b) => (
//         <div key={b._id}>
//           <p>User: {b.user?.name}</p>
//           <p>Restaurant: {b.restaurant?.name}</p>
//           <p>Date: {b.date}</p>
//           <p>Time: {b.time}</p>
//           <p>Guests: {b.guests}</p>



//           <h4>Ordered Menu</h4>

//             {b.orderedItems && b.orderedItems.length > 0 ? (
//               b.orderedItems.map((item, index) => (
//                 <div key={index}>
//                   <p>Item: {item.name}</p>
//                   <p>Price: ₹{item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Subtotal: ₹{item.price * item.quantity}</p>
//                   <hr />
//                 </div>
//               ))
//                ) : (
//               <p>No menu items selected</p>
//             )}
//             <h4>Total Amount: ₹{b.totalAmount}</h4>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default OwnerDashboard;












import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  PlusCircle, 
  Edit3, 
  Trash2, 
  Utensils, 
  MapPin, 
  Calendar, 
  User, 
  Receipt,
  Settings
} from "lucide-react";

function OwnerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    cuisine: "",
    image: "" 
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/restaurants/owner");
      setRestaurants(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await API.get("/bookings/owner");
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  const handleAdd = async () => {
    try {
      if (editingId) {
        await API.put(`/restaurants/${editingId}`, form);
        alert("Updated Successfully");
        setEditingId(null);
      } else {
        await API.post("/restaurants", form);
        alert("Restaurant Added");
      }
      const res = await API.get("/restaurants/owner");
      setRestaurants(res.data);
      setForm({ name: "", location: "", cuisine: "" });
    } catch (error) {
      alert("Error processing request");
    }
  };

  const handleEdit = (restaurant) => {
    setEditingId(restaurant._id);
    setForm({
      name: restaurant.name,
      location: restaurant.location,
      cuisine: restaurant.cuisine
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      await API.delete(`/restaurants/${id}`);
      alert("Deleted Successfully");
      const res = await API.get("/restaurants/owner");
      setRestaurants(res.data);
    }
  };

  return (
    <div className="bg-[#F8F9FB] min-h-screen pt-24 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- DASHBOARD HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Owner Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage your properties and track live bookings.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
               <span className="text-xs text-gray-400 uppercase font-bold block">Total Bookings</span>
               <span className="text-xl font-bold text-orange-500">{bookings.length}</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
               <span className="text-xs text-gray-400 uppercase font-bold block">Active Listings</span>
               <span className="text-xl font-bold text-gray-900">{restaurants.length}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* --- LEFT COLUMN: RESTAURANT MANAGEMENT --- */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* ADD / EDIT FORM CARD */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  {editingId ? <Edit3 size={20}/> : <PlusCircle size={20}/>}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {editingId ? "Update Restaurant Details" : "Register New Restaurant"}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  placeholder="Restaurant Name"
                  className="bg-gray-50 border border-transparent rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 transition-all text-sm"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  placeholder="Location (City, Area)"
                  className="bg-gray-50 border border-transparent rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 transition-all text-sm"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
                <input
                  placeholder="Cuisine Type"
                  className="bg-gray-50 border border-transparent rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 transition-all text-sm"
                  value={form.cuisine}
                  onChange={(e) => setForm({ ...form, cuisine: e.target.value })}
                />

                <input
                placeholder="Image URL"
                className="bg-gray-50 border border-transparent rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 transition-all text-sm"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
               />


              </div>
              <button 
                onClick={handleAdd}
                className="mt-6 w-full bg-gray-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
              >
                {editingId ? "SAVE CHANGES" : "ADD RESTAURANT"}
              </button>
            </div>

            {/* RESTAURANTS LIST */}
            <div className="space-y-6">
              <h3 className="text-lg font-black uppercase tracking-widest text-gray-400 flex items-center">
                <LayoutDashboard size={18} className="mr-2" /> Your Properties
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {restaurants.map((r) => (
                  <div key={r._id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-serif font-bold text-gray-900">{r.name}</h4>
                        <p className="text-gray-400 text-xs flex items-center mt-1">
                          <MapPin size={12} className="mr-1 text-orange-500" /> {r.location}
                        </p>
                      </div>
                      <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                        {r.cuisine || "Multi-Cuisine"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
                      <button 
                        onClick={() => handleEdit(r)}
                        className="flex-1 bg-gray-50 hover:bg-orange-50 hover:text-orange-600 p-3 rounded-xl text-gray-600 transition-all flex items-center justify-center"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(r._id)}
                        className="flex-1 bg-gray-50 hover:bg-red-50 hover:text-red-600 p-3 rounded-xl text-gray-600 transition-all flex items-center justify-center"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button 
                        onClick={() => navigate(`/owner/menu/${r._id}`)}
                        className="flex-[2] bg-gray-900 hover:bg-orange-600 text-white text-xs font-bold py-3 rounded-xl transition-all"
                      >
                        MANAGE MENU
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: RECENT BOOKINGS --- */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center">
              <Calendar size={18} className="mr-2" /> Recent Bookings
            </h3>
            
            <div className="space-y-4">
              {bookings.length === 0 ? (
                <div className="bg-white p-10 rounded-[2rem] text-center border border-dashed border-gray-200">
                  <p className="text-gray-400 text-sm italic">No bookings yet.</p>
                </div>
              ) : (
                bookings.map((b) => (
                  <div key={b._id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{b.user?.name || "Guest User"}</p>
                        <p className="text-xs text-orange-500 font-medium">{b.restaurant?.name}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-tighter mb-4">
                      <div className="bg-gray-50 p-2 rounded-lg text-center">📅 {b.date}</div>
                      <div className="bg-gray-50 p-2 rounded-lg text-center">⏰ {b.time}</div>
                    </div>

                    {/* Ordered Items Dropdown Style */}
                    <div className="border-t border-gray-50 pt-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-2 flex items-center">
                        <Receipt size={12} className="mr-1" /> Order Details
                      </p>
                      {b.orderedItems?.length > 0 ? (
                        <div className="space-y-1 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                          {b.orderedItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs py-1">
                              <span className="text-gray-600">{item.quantity}x {item.name}</span>
                              <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400 italic">No pre-ordered menu.</p>
                      )}
                      
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase">Total Bill</span>
                        <span className="text-xl font-serif font-bold text-gray-900">₹{b.totalAmount}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;