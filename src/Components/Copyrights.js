import React from 'react';

const Copyrights = () => (
  <footer
    className="w-full bg-gray-100 text-gray-500 text-center py-5 text-sm shadow-inner mt-12"
  >
    &copy; {new Date().getFullYear()} SPL PRADEEP. All rights reserved.
  </footer>
);

export default Copyrights;