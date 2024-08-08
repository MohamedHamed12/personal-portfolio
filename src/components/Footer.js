import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
