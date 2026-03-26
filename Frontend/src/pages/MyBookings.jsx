// import { useEffect, useState } from "react";
// import API from "../services/api";

// function MyBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await API.get("/bookings/my");
//         setBookings(res.data);
//       } catch (error) {
//         alert("Please login");
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <div>
//       <h2>My Orders</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings yet</p>
//       ) : (
//         bookings.map((b) => (
//           <div key={b._id}>
//             <h3>{b.restaurant?.name}</h3>
//             <p>Date: {b.date}</p>
//             <p>Time: {b.time}</p>
//             <p>Guests: {b.guests}</p>

//             <h4>Ordered Menu</h4>

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
//              <h4>Total Amount: ₹{b.totalAmount}</h4>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyBookings;










import { useEffect, useState } from "react";
import API from "../services/api";
import { Calendar, Clock, Users, Utensils, Receipt, PackageOpen } from "lucide-react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/my");
        setBookings(res.data);
      } catch (error) {
        alert("Please login to view your bookings");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* --- Header Section --- */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-2">History</h2>
          <h1 className="text-4xl font-serif font-bold text-gray-900">Your <span className="italic text-orange-500">Reservations</span></h1>
          <p className="text-gray-500 mt-2">Manage and track your upcoming and past dining experiences.</p>
        </div>

        {/* --- Bookings List --- */}
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <PackageOpen size={60} className="text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">No bookings found yet. Time to explore!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {bookings.map((b) => (
              <div 
                key={b._id} 
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Order Top Bar */}
                <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                      <Utensils size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900">{b.restaurant?.name || "Premium Restaurant"}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">Confirmed</span>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm font-bold text-gray-600">
                    <div className="flex items-center"><Calendar size={16} className="mr-2 text-orange-500" /> {b.date}</div>
                    <div className="flex items-center"><Clock size={16} className="mr-2 text-orange-500" /> {b.time}</div>
                    <div className="flex items-center"><Users size={16} className="mr-2 text-orange-500" /> {b.guests} Guests</div>
                  </div>
                </div>

                {/* Order Details Body */}
                <div className="p-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center">
                    <Receipt size={14} className="mr-2" /> Ordered Menu
                  </h4>

                  {b.orderedItems && b.orderedItems.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-[10px] font-black uppercase text-gray-400 border-b border-gray-50">
                            <th className="pb-4">Item Name</th>
                            <th className="pb-4 text-center">Price</th>
                            <th className="pb-4 text-center">Qty</th>
                            <th className="pb-4 text-right">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {b.orderedItems.map((item, index) => (
                            <tr key={index} className="border-b border-gray-50 last:border-0">
                              <td className="py-4 font-bold text-gray-800">{item.name}</td>
                              <td className="py-4 text-center text-gray-500">₹{item.price}</td>
                              <td className="py-4 text-center">
                                <span className="bg-gray-100 px-3 py-1 rounded-lg font-bold text-xs">{item.quantity}</span>
                              </td>
                              <td className="py-4 text-right font-bold text-gray-900">₹{item.price * item.quantity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm italic">No specific items pre-ordered for this visit.</p>
                  )}

                  {/* Order Footer */}
                  <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-50 flex justify-between items-center">
                    <div className="text-xs text-gray-400 font-medium">Order ID: {b._id.slice(-8).toUpperCase()}</div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Total Paid</span>
                      <span className="text-3xl font-serif font-bold text-gray-900 italic">₹{b.totalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;