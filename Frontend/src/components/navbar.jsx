// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation(); // To highlight the active page

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Helper function to check if a link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
//       isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
//         {/* Left Side: DineSpot Logo */}
//         <Link to="/" className="flex items-center space-x-2 group">
//           <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
//             <span className="text-white font-bold text-2xl font-serif">D</span>
//           </div>
//           <h1 className="text-2xl font-serif font-bold tracking-tight text-gray-900">
//             Dine<span className="text-orange-500">Spot</span>
//           </h1>
//         </Link>

//         {/* Right Side: Navigation Links */}
//         <div className="hidden md:flex items-center space-x-10">
//           <ul className="flex space-x-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
//             <li>
//               <Link to="/" className={`hover:text-orange-500 transition-colors ${isActive('/') ? 'text-orange-500' : ''}`}>Home</Link>
//             </li>
//             <li>
//               {/* Note: Ensure you have a /restaurants route if you want to use this, 
//                   otherwise this could link back to Home where list is shown */}
//               <Link to="/restaurants" className="hover:text-orange-500 transition-colors">Restaurants</Link>
//             </li>
//             <li>
//               <Link to="/my-bookings" className={`hover:text-orange-500 transition-colors ${isActive('/my-bookings') ? 'text-orange-500' : ''}`}>My Orders</Link>
//             </li>
//             <li>
//               <Link to="/owner" className={`hover:text-orange-500 transition-colors ${isActive('/owner') ? 'text-orange-500' : ''}`}>Dashboard</Link>
//             </li>
//           </ul>

//           <div className="flex items-center space-x-4 ml-6 border-l pl-6 border-gray-200">
//             <Link 
//               to="/login" 
//               className="text-sm font-bold text-gray-800 hover:text-orange-500 transition-colors"
//             >
//               SIGN IN
//             </Link>
//             <Link 
//               to="/register" 
//               className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react'; // Icons for premium look

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: DineSpot Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-amber-400 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-2xl font-serif">D</span>
          </div>
          <h1 className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Dine<span className="text-orange-500">Spot</span>
          </h1>
        </Link>

        {/* Right Side: Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className={`flex space-x-8 text-xs font-semibold uppercase tracking-[0.2em] ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
            <li>
              <Link to="/" className={`hover:text-orange-500 transition-colors ${isActive('/') ? 'text-orange-500' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/restaurants" className={`hover:text-orange-500 transition-colors ${isActive('/restaurants') ? 'text-orange-500' : ''}`}>Restaurants</Link>
            </li>

            {/* Role Based Links */}
            {token && user?.role === "user" && (
              <li>
                <Link to="/my-bookings" className={`hover:text-orange-500 transition-colors ${isActive('/my-bookings') ? 'text-orange-500' : ''}`}>My Orders</Link>
              </li>
            )}

            {token && user?.role === "owner" && (
              <li>
                <Link to="/owner" className={`hover:text-orange-500 transition-colors ${isActive('/owner') ? 'text-orange-500' : ''}`}>Dashboard</Link>
              </li>
            )}
          </ul>

          <div className="flex items-center space-x-4 ml-6 border-l pl-6 border-gray-200">
            {!token ? (
              <>
                <Link 
                  to="/login" 
                  className={`text-sm font-bold hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  SIGN IN
                </Link>
                <Link 
                  to="/register" 
                  className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-5">
                {/* User Profile Display */}
                <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
                  <User size={16} className="text-orange-500" />
                  <span className={`text-sm font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                    {user?.name?.split(" ")[0]}
                  </span>
                </div>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1"
                >
                  <LogOut size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;