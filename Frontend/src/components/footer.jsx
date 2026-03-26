import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">D</span>
              </div>
              <h2 className="text-2xl font-serif font-bold tracking-tight">
                Dine<span className="text-orange-500">Spot</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the art of fine dining. We connect food lovers with the most 
              exquisite culinary destinations in the city.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Restaurants</Link></li>
              <li><Link to="/my-bookings" className="hover:text-white transition-colors">My Bookings</Link></li>
              <li><Link to="/owner" className="hover:text-white transition-colors">Owner Dashboard</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get offers and news.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 transition-colors text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest py-3 rounded-md transition-all">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 DineSpot. Crafted for food lovers.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Saharanpur, UP</span>
            <span className="hover:text-white cursor-pointer transition-colors">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Social Icons
const SocialIcon = ({ icon }) => (
  <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
    {icon}
  </a>
);

export default Footer;