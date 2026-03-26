// import { useEffect, useState } from "react";

// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [restaurants, setRestaurants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await API.get("/restaurants");
//       setRestaurants(res.data);
//     };
//     fetchData();
//   }, []);

//   const token = localStorage.getItem("token");


//   return (
//     <div>
//       <h2>Restaurants</h2>

//       {restaurants.map((r) => (
//         <div key={r._id} onClick={() => navigate(`/restaurant/${r._id}`)}>
//           <h3>{r.name}</h3>
//           <p>{r.location}</p>
//           <button>view Detail</button>
//         </div>
//       ))}

//       <div>
// {token && (
//   <button onClick={() => navigate("/my-bookings")}>
//     My Orders
//   </button>
// )}
//       </div>
//     </div>
   
//   );
// }

// export default Home;




import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Utensils, ArrowRight, Search } from "lucide-react";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/restaurants");
        setRestaurants(res.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchData();
  }, []);

  const token = localStorage.getItem("token");

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* --- Page Header --- */}
      <div className="bg-white border-b border-gray-100 pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-3">
              Discover
            </h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Our <span className="italic text-orange-500">Restaurants</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-md">
              Explore the finest dining spots in Saharanpur, curated just for you.
            </p>
          </div>

          {/* Search Bar UI (Visual Only) */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>
      </div>

      {/* --- Restaurants Grid --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurants.map((r) => (
            <div 
              key={r._id} 
              onClick={() => navigate(`/restaurant/${r._id}`)}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Card Image Placeholder */}
              <div className="relative h-64 overflow-hidden">
                <img 
                     src={r.image || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     alt={r.name}
                  />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-gray-900 flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-orange-500 fill-orange-500" /> 4.9 RATING
                </div>
                <div className="absolute bottom-4 left-4">
                   <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest">
                      Open Now
                   </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {r.name}
                  </h3>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <MapPin size={16} className="mr-1 text-orange-500" />
                  <span className="font-medium">{r.location}</span>
                </div>

                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <Utensils size={14} className="mr-2" />
                    Fine Dining
                  </div>
                  <button className="flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-all">
                    VIEW DETAIL 
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Floating Action: My Orders (Only if token exists) --- */}
        {token && (
          <div className="fixed bottom-10 right-10 z-50">
            <button 
              onClick={() => navigate("/my-bookings")}
              className="bg-gray-900 text-white flex items-center space-x-3 px-8 py-4 rounded-full shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 group"
            >
              <span className="font-bold text-sm tracking-widest uppercase">My Orders</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Utensils size={14} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;