import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-2 text-left mt-auto px-3">
      
      <div className="mb-2 space-x-4">
        <a href="/" className="text-white hover:text-zinc-400 transition">Home</a>
        <a href="/about" className="text-white hover:text-zinc-400 transition">About</a>
        <a href="/contact" className="text-white hover:text-zinc-400 transition">Contact</a>
        <a href="/products" className="text-white hover:text-zinc-400 transition">Products</a>
      </div>
      <div className="text-2xl space-x-3 my-3 flex">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-400 transition"><FaGithub /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-400 transition"><FaTwitter /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-400 transition"><FaInstagram /></a>
      </div>
      <div className="mt-1 text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} Gaming Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;