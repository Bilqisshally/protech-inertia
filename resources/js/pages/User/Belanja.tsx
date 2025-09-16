import React from 'react';
import { Navigate } from "react-router-dom";

const Belanja: React.FC = () => {
  return <Navigate to="/produk" replace />;
};

export default Belanja;