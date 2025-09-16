import React from 'react';

// Menambahkan tipe React.FC (Functional Component)
const Topbar: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Halo, Admin</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;