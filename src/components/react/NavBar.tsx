import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    console.log('clicked');
    setIsOpen(!isOpen);
  }

  return (
    <nav id="main-nav" className="fixed flex items-center justify-between w-full pr-10 px-6 py-10 z-40 text-white">
      <div>
        <a href="/">
          <img src="/images/logo.png" alt="logo" className='h-20' />
          </a>
      </div>

      <ul className={`md:flex items-center justify-between space-x-4 text-xl pr-8 font-semibold font-mono ${isOpen ? '' : 'hidden'}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/gallery/">Galería</a></li>
        <li><a href="/blog">Menú</a></li>
        <li><a href="/blog">Reserva</a></li>
        
      </ul>
      
      <svg className="h-6 w-6 fill-current md:hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" cursor-pointer onClick={toggleMenu}>
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>

      {isOpen && (
        <nav>
          <div id="mobile-menu" className="absolute top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center">
            <ul>
              <li><a href="/" className="text-2xl py-4">Home</a></li>
              <li><a href="/story/" className="text-2xl py-4">Story</a></li>
              <li><a href="/blog" className="text-2xl py-4">Blog</a></li>
              <button className="text-2xl py-4" onClick={toggleMenu}>X</button>
            </ul>
          </div>
        </nav>
      )}
    </nav>
  );
}

export default Navbar;