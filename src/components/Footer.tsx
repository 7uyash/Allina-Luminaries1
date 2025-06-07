import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#DDB9A2] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo Section */}
          <div>
            <Link to="/" className="block mb-6">
              <div className="w-[106px] h-[106px]">
                <svg 
                  width="106" 
                  height="106" 
                  viewBox="0 0 401 401" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#DDB9A2]"
                >
                  <path d="M0 6.10352e-05H401V401H0V6.10352e-05Z" fill=""/>
                </svg>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-normal mb-8">QUICK LINKS</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-[#DDB9A2] hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#DDB9A2] hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#DDB9A2] hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#DDB9A2] hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#DDB9A2] hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#DDB9A2] hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-white text-xl font-normal mb-8">OTHER LINKS</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blogs" className="text-[#DDB9A2] hover:text-white transition-colors">Blogs</Link>
              </li>
              <li>
                <Link to="/articles" className="text-[#DDB9A2] hover:text-white transition-colors">Articles</Link>
              </li>
              <li>
                <Link to="/journals" className="text-[#DDB9A2] hover:text-white transition-colors">Journals</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-normal mb-8">CONTACT</h3>
            <div className="space-y-4">
              <p className="text-[#DDB9A2]">
                New Industrial Town,<br />
                Faridabad, Haryana<br />
                (121221)
              </p>
              <p>
                <a href="mailto:example@allina.co.in" className="text-[#DDB9A2] hover:text-white transition-colors">
                  example@allina.co.in
                </a>
              </p>
              <p>
                <a href="tel:+911234567890" className="text-[#DDB9A2] hover:text-white transition-colors">
                  +911234567890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#DDB9A2]/20">
          <p className="text-center text-[#DDB9A2] text-sm">
            ©2025 | All Rights reserved | Allina Luminaries Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};
