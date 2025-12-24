import Link from "next/link";
import React, { useState, useEffect } from "react";

const Register: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Theme color
  const themeColor = "#fb2c36";

  useEffect(() => {
    setIsMounted(true);
    
    // Add CSS to make navbar text black
    const style = document.createElement('style');
    style.textContent = `
      /* Make navbar text black for contact page */
      nav.is-sticky .navigation-menu a {
        color: #fff !important;
      }
      
      nav.is-sticky .navigation-menu a:hover {
        color: #fb2c36 !important;
      }
      
      nav.is-sticky .logo img:not(.dark:inline-block) {
        filter: brightness(0) !important;
      }
      
      /* Dropdown menu styling - black background */
      nav.is-sticky .dropdown-menu {
        background-color: #000 !important;
        border-color: #333 !important;
      }
      
      nav.is-sticky .dropdown-menu a {
        color: #fff !important;
      }
      
      nav.is-sticky .dropdown-menu a:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      nav.is-sticky .dropdown-item {
        color: #fff !important;
      }
      
      nav.is-sticky .dropdown-item:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      /* Specific classes for different dropdown implementations */
      nav.is-sticky .sub-menu,
      nav.is-sticky .submenu,
      nav.is-sticky .dropdown-content,
      nav.is-sticky .menu-dropdown {
        background-color: #000 !important;
        color: #fff !important;
      }
      
      nav.is-sticky .sub-menu a,
      nav.is-sticky .submenu a,
      nav.is-sticky .dropdown-content a,
      nav.is-sticky .menu-dropdown a {
        color: #fff !important;
      }
      
      nav.is-sticky .sub-menu a:hover,
      nav.is-sticky .submenu a:hover,
      nav.is-sticky .dropdown-content a:hover,
      nav.is-sticky .menu-dropdown a:hover {
        color: #fb2c36 !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
      }
      
      /* Dropdown arrow/border styling */
      nav.is-sticky .dropdown-toggle::after {
        border-top-color: #fff !important;
      }
      
      nav.is-sticky .dropdown-menu::before {
        border-bottom-color: #333 !important;
      }
      
      /* Contact page specific styles */
      .contact-hero {
        background: linear-gradient(135deg, ${themeColor} 0%, #d9232d 100%);
      }
      
      .floating-contact-card {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-top: 4px solid ${themeColor};
      }
      
      .contact-form-card {
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      }
      
      .dark .contact-form-card {
        background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
      }
      
      .accordion-item {
        transition: all 0.3s ease;
      }
      
      .accordion-item:hover {
        transform: translateX(5px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
        <div className="absolute inset-0 image-wrap z-1 bg-[url('../../assets/images/bg/6.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-2" id="particles-snow"></div>
        <div className="container relative z-3">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
              <a href="index.html">
                <img 
                  src="assets/images/logo-dark.png" 
                  className="mx-auto" 
                  alt="Logo"
                />
              </a>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form className="text-start" action="https://shreethemes.in/travosy/layouts/signup-success.html">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                    <input 
                      id="RegisterName" 
                      type="text" 
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                      placeholder="Harry"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                    <input 
                      id="LoginEmail" 
                      type="email" 
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                    <input 
                      id="LoginPassword" 
                      type="password" 
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" 
                      placeholder="Password:"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input 
                        className="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-red-600 checked:appearance-auto dark:accent-red-600 focus:border-red-300 focus:ring-0 focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50 me-2" 
                        type="checkbox" 
                        value="" 
                        id="AcceptT&C"
                      />
                      <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">
                        I Accept <a href="" className="text-red-500">Terms And Condition</a>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input 
                      type="submit" 
                      className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer hover:bg-red-600 transition-colors duration-300" 
                      value="Register"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account ? </span> 
                    <Link href="/login" className="text-slate-900 dark:text-white font-bold inline-block">Sign in</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;