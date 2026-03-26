import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMapPin, FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
            alt="Fine Dining" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-in-down">
              The Ultimate Dining Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Book Your Table <br /> 
              <span className="italic text-orange-400">At The Best</span> Places
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
              Discover Saharanpur's hidden culinary gems and book an unforgettable 
              experience in seconds. Fine dining, delivered simply.
            </p>

            {/* Premium Search Bar */}
            <div className="flex items-center bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl max-w-xl">
              <div className="flex-1 flex items-center px-4 space-x-3">
                <FiSearch className="text-orange-500 text-xl" />
                <input 
                  type="text" 
                  placeholder="Search cuisine, restaurant..." 
                  className="bg-transparent w-full py-3 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center space-x-2">
                <span>FIND</span>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-orange-500 tracking-[0.2em] uppercase mb-2">Editor's Choice</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">Featured Restaurants</h3>
          </div>
          <Link to="/" className="text-gray-900 font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-all">
            View All Places
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl h-[400px] mb-6">
                <img 
                  src={`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&q=${item}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Restaurant"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                  ★ 4.8
                </div>
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                The Grand Pavilion
              </h4>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FiMapPin className="mr-1 text-orange-500" />
                <span>Civil Lines, Saharanpur</span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2">
                Experience world-class Mughlai cuisine with a modern twist in an elegant setting...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION / OWNER SECTION */}
      <section className="bg-gray-50 py-20 px-6 rounded-[3rem] mx-6 mb-20 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Own a Restaurant?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Join the DineSpot family and manage your bookings, menus, and customers 
            all from one stylish dashboard.
          </p>
          <Link 
            to="/owner" 
            className="inline-flex items-center bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-500 transition-all shadow-xl hover:shadow-orange-500/20"
          >
            LIST YOUR BUSINESS
          </Link>
        </div>
        {/* Subtle decorative background text */}
        <span className="absolute -bottom-10 left-0 text-[12rem] font-serif font-bold text-gray-200/50 select-none pointer-events-none">
          Dine
        </span>
      </section>
    </div>
  );
};

export default Home;