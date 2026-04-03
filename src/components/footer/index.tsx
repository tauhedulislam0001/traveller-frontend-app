import React, { useEffect } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('hidden');
          backToTopButton.style.display = 'flex';
        } else {
          backToTopButton.classList.add('hidden');
          backToTopButton.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Top Section - Company Info */}
        <div className="text-center md:text-left mb-10 md:mb-12">
          <div className="flex justify-center md:justify-start">
            <img src="assets/images/logo-light.png" alt="Pathfriend Tour Operator" className="h-12 w-auto" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-2xl mx-auto md:mx-0">
            Planning for a trip? We will organize your trip with the best places and within best budget!
          </p>
        </div>

        {/* Links Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-red-500 inline-block md:block">
              Contact Info
            </h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">House #123, Road #5, Banani, Dhaka-1213</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@pathfriend.com" className="text-sm text-gray-400 hover:text-white transition">info@pathfriend.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+880123456789" className="text-sm text-gray-400 hover:text-white transition">+880 1234-56789</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-red-500 inline-block md:block">
              Quick Links
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/aboutus" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-red-500 inline-block md:block">
              Legal
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/terms-and-conditions" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/payment-method" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Payment Method
                </Link>
              </li>
              <li>
                <Link href="/booking-cancellation-policy" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Booking & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm text-gray-400 hover:text-white transition inline-block">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 pb-2 border-b-2 border-red-500 inline-block md:block">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.509-.5 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Follow us for updates & offers
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Pathfriend Tour Operator. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Designed with <span className="text-red-500">❤</span> by Pathfriend Team
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        id="back-to-top"
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden items-center justify-center z-50"
        style={{ display: 'none' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};