import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved. Unauthorized use or distribution is prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;