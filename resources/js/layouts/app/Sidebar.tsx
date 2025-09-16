import React from 'react';
import { Link } from "react-router-dom";

// Menambahkan tipe React.FC (Functional Component)
const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4 h-full">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Admin Panel</h2>
      <nav className="space-y-4">
        {/* Mengganti prop 'href' menjadi 'to' yang benar untuk react-router-dom */}
        <Link to="/admin/dashboard" className="block hover:text-blue-600 transition-colors">Dashboard</Link>
        <Link to="/admin/products" className="block hover:text-blue-600 transition-colors">Manajemen Produk</Link>
        <Link to="/admin/users" className="block hover:text-blue-600 transition-colors">Manajemen User</Link>
        <Link to="/admin/messages" className="block hover:text-blue-600 transition-colors">Pesan Kontak</Link>
        <Link to="/admin/settings" className="block hover:text-blue-600 transition-colors">Pengaturan</Link>
      </nav>
    </div>
  );
};

export default Sidebar;