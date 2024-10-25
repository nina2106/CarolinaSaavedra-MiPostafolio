import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center text-2xl p-4">
      <p>&copy; {new Date().getFullYear()} Carolina Saavedra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
