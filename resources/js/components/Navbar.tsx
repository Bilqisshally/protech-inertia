import { Icon } from '@iconify/react';
import React, { useState } from "react"; // Tidak perlu lagi useContext
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logonav.png";
// Impor 'useCart' dari CartContext Anda
import { useCart } from '../context/CartContext'; 

const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  
  // Gunakan hook 'useCart()' untuk mendapatkan data. Lebih bersih dan aman.
  const { cartItems } = useCart();

  const handleClick = () => {
      setShow(!show);
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full transition-all py-4 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="ProTech Logo"
              className="w-8 h-8 object-contain"
            />
            <h1 className="sm:text-2xl text-xl font-bold text-gray-800">
              ProTech.id
            </h1>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-8">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "font-medium opacity-75 hover:opacity-100 transition-all text-gray-700"}>Beranda</NavLink></li>
              <li><NavLink to="/produk" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "font-medium opacity-75 hover:opacity-100 transition-all text-gray-700"}>Produk</NavLink></li>
              <li><NavLink to="/tentang" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "font-medium opacity-75 hover:opacity-100 transition-all text-gray-700"}>Tentang Kami</NavLink></li>
              <li><button onClick={() => {/* handleScrollLayanan */}} className="font-medium opacity-75 hover:opacity-100 transition-all text-gray-700">Layanan</button></li>
              <li><NavLink to="/kontak" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "font-medium opacity-75 hover:opacity-100 transition-all text-gray-700"}>Kontak</NavLink></li>
            </ul>
            
            {/* Ikon Keranjang & Tombol Login */}
            <div className="flex items-center ml-4 gap-4">
              <Link to="/keranjang" className="relative p-2">
                <Icon icon="mdi:cart" className="w-7 h-7 text-gray-700 hover:text-blue-600 transition" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
              
              <Link to="/login" className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Login
              </Link>
            </div>
          </div>

          {/* Tombol Mobile */}
          <button className="md:hidden flex flex-col gap-1 p-2" onClick={handleClick}>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${show ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-opacity ${show ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-transform ${show ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile */}
        {show && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              <li><NavLink to="/" onClick={handleClick} className="font-medium opacity-75 hover:opacity-100 transition-all text-gray-700">Beranda</NavLink></li>
              <li><NavLink to="/produk" onClick={handleClick} className="font-medium opacity-75 hover:opacity-100 transition-all text-gray-700">Produk</NavLink></li>
              <li><NavLink to="/tentang" onClick={handleClick} className="font-medium opacity-75 hover:opacity-100 transition-all text-gray-700">Tentang Kami</NavLink></li>
              <li className="pt-2 border-t mt-2">
                <Link to="/keranjang" onClick={handleClick} className="flex items-center font-semibold text-blue-600">
                  <Icon icon="mdi:cart" className="w-6 h-6 mr-2" />
                  <span>Keranjang Belanja ({cartItems.length})</span>
                </Link>
              </li>
              {/* Tambahkan tombol Login di menu mobile juga */}
              <li className="pt-2 border-t mt-2">
                <Link to="/login" onClick={handleClick} className="flex items-center font-semibold text-blue-600">
                  <Icon icon="mdi:login" className="w-6 h-6 mr-2" />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;