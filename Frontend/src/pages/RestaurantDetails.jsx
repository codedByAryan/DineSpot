// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { useParams } from "react-router-dom";

// function RestaurantDetails() {
//   const { id } = useParams();
//   const [restaurant, setRestaurant] = useState({});
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [booking, setBooking] = useState({
//     date: "",
//     time: "",
//     guests: 1
//   });

  
//   useEffect(() => {
//     API.get(`/restaurants/${id}`).then((res) => setRestaurant(res.data));
//   }, [id]);

//   const handleBooking = async () => {

//     const token = localStorage.getItem("token");
//     // ❌ Agar login nahi hai
//   if (!token) {
//     alert("⚠️ Please login to book a table");
//     return;
//   }


//     await API.post("/bookings", {
//       restaurantId: id,
//       ...booking,
//       orderedItems: selectedItems,
//     });
//     alert("✅ Table Booked Successfully!");
//   };


//   const handleQuantityChange = (item, quantity) => {
//   const qty = Number(quantity);

//   const existing = selectedItems.find((i) => i.name === item.name);

//   if (existing) {
//     const updated = selectedItems.map((i) =>
//       i.name === item.name ? { ...i, quantity: qty } : i
//     ).filter((i) => i.quantity > 0);

//     setSelectedItems(updated);
//   } else if (qty > 0) {
//     setSelectedItems([
//       ...selectedItems,
//       {
//         name: item.name,
//         price: item.price,
//         quantity: qty,
//       },
//     ]);
//   }
// };



//   return (
//     <div>
//       <h2>{restaurant.name}</h2>
//       <p>{restaurant.location}</p>

//       <h3>Book Table</h3>
//       <input type="date" onChange={(e) => setBooking({ ...booking, date: e.target.value })} />
//       <input placeholder="Time" onChange={(e) => setBooking({ ...booking, time: e.target.value })} />
//       <input type="number" onChange={(e) => setBooking({ ...booking, guests: e.target.value })} />

//       <button onClick={handleBooking}>Book</button>



//                <h3>Menu</h3>

// {restaurant.menu?.map((item, index) => (
//   <div key={index}>
//     <h4>{item.name}</h4>
//     <p>{item.description}</p>
//     <p>₹ {item.price}</p>

//     <input
//       type="number"
//       min="0"
//       placeholder="Quantity"
//       onChange={(e) => handleQuantityChange(item, e.target.value)}
//     />
//   </div>
// ))}



//     </div>
//   );
// }

// export default RestaurantDetails;







import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Users, Calendar, Utensils, Star, CheckCircle } from "lucide-react";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    guests: 1
  });

  useEffect(() => {
    API.get(`/restaurants/${id}`).then((res) => setRestaurant(res.data));
  }, [id]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("⚠️ Please login to book a table");
      return;
    }

    try {
      await API.post("/bookings", {
        restaurantId: id,
        ...booking,
        orderedItems: selectedItems,
      });
      alert("✅ Table Booked Successfully!");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleQuantityChange = (item, quantity) => {
    const qty = Number(quantity);
    const existing = selectedItems.find((i) => i.name === item.name);

    if (existing) {
      const updated = selectedItems.map((i) =>
        i.name === item.name ? { ...i, quantity: qty } : i
      ).filter((i) => i.quantity > 0);
      setSelectedItems(updated);
    } else if (qty > 0) {
      setSelectedItems([
        ...selectedItems,
        {
          name: item.name,
          price: item.price,
          quantity: qty,
        },
      ]);
    }
  };

  // Calculate Total (UI only)
  const totalAmount = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-20">
      {/* --- HERO HEADER --- */}
      <div className="relative h-[45vh] w-full overflow-hidden">
        <img 
          src={restaurant.image || "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"} 
          className="w-full h-full object-cover" 
          alt="Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            <div className="text-white">
              <div className="flex items-center space-x-2 text-orange-500 mb-2">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-bold tracking-widest uppercase">Premium Destination</span>
              </div>
              <h1 className="text-5xl font-serif font-bold mb-2">{restaurant.name}</h1>
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-2 text-orange-500" />
                <p className="text-lg">{restaurant.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* --- LEFT SIDE: MENU --- */}
        <div className="flex-1">
          <div className="mb-12">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Discover Our Menu</h3>
            <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid gap-6">
            {restaurant.menu?.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex justify-between items-center"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-2 max-w-md">{item.description}</p>
                  <p className="text-orange-600 font-bold text-lg italic">₹ {item.price}</p>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-2 rounded-2xl">
                  <span className="text-[10px] font-black uppercase text-gray-400 px-2">Qty</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-16 bg-white border border-gray-200 rounded-xl px-2 py-2 text-center text-sm font-bold outline-none focus:border-orange-500"
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: BOOKING CARD --- */}
        <div className="lg:w-96">
          <div className="sticky top-28 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-bold">Reservations</h3>
              <Utensils className="text-orange-500" size={24} />
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Dining Date</label>
                <div className="relative flex items-center mt-2">
                  <Calendar className="absolute left-4 text-orange-500" size={18} />
                  <input 
                    type="date" 
                    className="w-full bg-gray-50 border border-transparent rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold focus:bg-white focus:border-orange-500 outline-none transition-all"
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })} 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Preferred Time</label>
                <div className="relative flex items-center mt-2">
                  <Clock className="absolute left-4 text-orange-500" size={18} />
                  <input 
                    placeholder="e.g. 08:30 PM" 
                    className="w-full bg-gray-50 border border-transparent rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold focus:bg-white focus:border-orange-500 outline-none transition-all"
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })} 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Number of Guests</label>
                <div className="relative flex items-center mt-2">
                  <Users className="absolute left-4 text-orange-500" size={18} />
                  <input 
                    type="number" 
                    min="1"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold focus:bg-white focus:border-orange-500 outline-none transition-all"
                    onChange={(e) => setBooking({ ...booking, guests: e.target.value })} 
                  />
                </div>
              </div>

              {/* Selection Summary (Optional but looks premium) */}
              {selectedItems.length > 0 && (
                <div className="bg-orange-50 rounded-2xl p-4 mt-6">
                  <p className="text-xs font-bold text-orange-800 uppercase mb-2">Pre-ordered Items</p>
                  <div className="text-sm text-orange-600 font-medium">
                    {selectedItems.length} items selected • Total ₹{totalAmount}
                  </div>
                </div>
              )}

              <button 
                onClick={handleBooking}
                className="w-full bg-gray-900 hover:bg-orange-600 text-white font-bold py-5 rounded-[1.5rem] shadow-xl shadow-gray-200 transition-all active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>CONFIRM BOOKING</span>
                <CheckCircle size={20} />
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-400 mt-6 uppercase tracking-widest">
              Instant confirmation • No booking fee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;