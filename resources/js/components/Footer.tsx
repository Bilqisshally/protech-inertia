import React from 'react';

// Mendefinisikan tipe komponen sebagai React.FC (Functional Component)
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-center sm:text-left text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Copyright by <span className="font-bold">ProTech.id</span>
        </p>

        {/* Sosmed */}
        <div className="flex items-center gap-6 text-2xl text-gray-500">
          <a href="https://facebook.com/URL_UR_FACEBOOK" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://tiktok.com/URL_UR_TIKTOK" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
            <i className="ri-tiktok-fill"></i>
          </a>
          <a href="https://youtube.com/URL_UR_YOUTUBE" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
            <i className="ri-youtube-fill"></i>
          </a>
          <a href="https://linkedin.com/in/URL_UR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://instagram.com/user/URL_UR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;