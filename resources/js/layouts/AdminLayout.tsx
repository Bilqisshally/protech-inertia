import React from 'react';
import Sidebar from "./app/Sidebar";
import Topbar from "./app/Topbar";

// 1. Definisikan tipe untuk props yang diterima komponen
interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

// 2. Gunakan tipe tersebut pada deklarasi komponen
const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        {/* Optionally render the title if provided */}
        {title && <h1 className="text-2xl font-bold px-6 pt-6">{title}</h1>}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;