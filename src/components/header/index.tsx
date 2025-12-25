import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// Import Feather icons
import {
  Clock,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Search,
  User,
  HelpCircle,
  Settings,
  LogOut
} from "react-feather";

export const Header: React.FC = () => {
  // State to handle mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // State for dropdowns
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Theme color
  const themeColor = "#fb2c36";

  // Refs for dropdown containers
  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearchDropdown = () => {
    setSearchDropdownOpen(!searchDropdownOpen);
    // Close profile dropdown if open
    if (profileDropdownOpen) setProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    // Close search dropdown if open
    if (searchDropdownOpen) setSearchDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target as Node)) {
        setSearchDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Handler for preventing default action on menu items
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  // Scroll event handler for sticky navbar
  const handleWindowScroll = () => {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  // Also check on initial load
  useEffect(() => {
    handleWindowScroll();
  }, []);

  return (
    <div>
      <div className="tagline bg-slate-900">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-between">
              <ul className="list-none">
                <li className="inline-flex items-center">
                  <Clock className="size-4" style={{ color: themeColor }} />
                  <span className="ms-2 text-slate-300">Mon-Sat: 9am to 6pm</span>
                </li>
                <li className="inline-flex items-center ms-2">
                  <MapPin className="size-4" style={{ color: themeColor }} />
                  <span className="ms-2 text-slate-300">Houston, USA 485</span>
                </li>
              </ul>

              <ul className="list-none">
                <li className="inline-flex items-center">
                  <Mail className="size-4" style={{ color: themeColor }} />
                  <a href="mailto:contact@example.com" className="ms-2 text-slate-300 hover:text-slate-200">contact@example.com</a>
                </li>
                <li className="inline-flex items-center ms-2">
                  <ul className="list-none">
                    <li className="inline-flex mb-0">
                      <a href="#!" className="text-slate-300 hover:text-[#fb2c36]">
                        <Facebook className="size-4 align-middle" />
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a href="#!" className="text-slate-300 hover:text-[#fb2c36]">
                        <Instagram className="size-4 align-middle" />
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a href="#!" className="text-slate-300 hover:text-[#fb2c36]">
                        <Twitter className="size-4 align-middle" />
                      </a>
                    </li>
                    <li className="inline-flex ms-2 mb-0">
                      <a href="tel:+152534-468-854" className="text-slate-300 hover:text-[#fb2c36]">
                        <Phone className="size-4 align-middle" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav 
        id="topnav" 
        className={`defaultscroll is-sticky tagline-height ${isSticky ? 'nav-sticky' : ''}`}
      >
        <div className="container relative">
          <a className="logo" href="/">
            <span className="inline-block dark:hidden">
              <img src="assets/images/logo-dark.png" className="h-7 l-dark" alt="" />
              <img src="assets/images/logo-light.png" className="h-7 l-light" alt="" />
            </span>
            <img src="assets/images/logo-white.png" className="hidden dark:inline-block" alt="" />
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <button 
                className="navbar-toggle" 
                id="isToggle" 
                onClick={toggleMenu}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>

          <ul className="buy-button list-none mb-0">
            {/* Search Dropdown */}
            <li className="dropdown inline-block relative pe-1" ref={searchDropdownRef}>
              <button 
                onClick={toggleSearchDropdown}
                className="dropdown-toggle align-middle inline-flex search-dropdown" 
                type="button"
              >
                <Search className="size-5" style={{ color: "#1e293b" }} />
                <Search className="size-5 text-white hidden dark:block" />
              </button>
              <div 
                className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 transition-all duration-200 ${searchDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} 
                onClick={stopPropagation}
              >
                <div className="relative">
                  <Search className="size-4 absolute top-[9px] end-3" style={{ color: themeColor }} />
                  <input 
                    type="text" 
                    className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none" 
                    name="s" 
                    id="searchItem" 
                    placeholder="Search..." 
                  />
                </div>
              </div>
            </li>
      
            {/* Profile Dropdown */}
            <li className="dropdown inline-block relative ps-0.5" ref={profileDropdownRef}>
              <button 
                onClick={toggleProfileDropdown}
                className="dropdown-toggle items-center" 
                type="button"
              >
                <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border" style={{ borderColor: themeColor, backgroundColor: themeColor }}>
                  <img src="assets/images/client/16.jpg" className="rounded-md" alt="" />
                </span>
              </button>
              <div 
                className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 transition-all duration-200 ${profileDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} 
                onClick={stopPropagation}
              >
                <ul className="py-2 text-start">
                  <li>
                    <Link href="/profile">
                      <div className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white cursor-pointer">
                        <User className="size-4 me-2" style={{ color: themeColor }} />
                        Profile
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="helpcenter.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                      <HelpCircle className="size-4 me-2" style={{ color: themeColor }} />
                      Helpcenter
                    </a>
                  </li>
                  <li>
                    <a href="user-setting.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                      <Settings className="size-4 me-2" style={{ color: themeColor }} />
                      Settings
                    </a>
                  </li>
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  <li>
                    <a href="login.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                      <LogOut className="size-4 me-2" style={{ color: themeColor }} />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          

          <div id="navigation" className={menuOpen ? "block" : "hidden md:block"}>
            <ul className="navigation-menu nav-right !justify-end nav-light">
              {/* <li className="has-submenu parent-menu-item">
                <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Hero</a><span className="menu-arrow"></span>
                <ul className="submenu">
                  <li><Link href="/" className="sub-menu-item">Tour One</Link></li>
                  <li><Link href="/tour-two" className="sub-menu-item">Tour Two</Link></li>
                  <li><a href="index-three.html" className="sub-menu-item">Tour Three</a></li>
                  <li><a href="index-four.html" className="sub-menu-item">Tour Four</a></li>
                  <li><a href="index-five.html" className="sub-menu-item">Tour Five</a></li>
                </ul>
              </li> */}

    
              <li><Link href="/" className="sub-menu-item hover:text-[#fb2c36]">Home</Link></li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Listing</a><span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Tour Grid</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="grid.html" className="sub-menu-item">Grid</a></li>
                      <li><Link href="/tour-package" className="sub-menu-item">Tour Package</Link></li>
                      <li><a href="grid-right-sidebar.html" className="sub-menu-item">Grid Right Sidebar</a></li>
                    </ul>  
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Tour List</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="list.html" className="sub-menu-item">List</a></li>
                      <li><a href="list-left-sidebar.html" className="sub-menu-item">List Left Sidebar</a></li>
                      <li><a href="list-right-sidebar.html" className="sub-menu-item">List Right Sidebar</a></li>
                    </ul>  
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Tour Detail</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><Link href="/tour-details" className="sub-menu-item">Tour Details</Link></li>
                      <li><a href="tour-detail-two.html" className="sub-menu-item">Tour Detail Two</a></li>
                    </ul>  
                  </li>
                </ul>
              </li>
          
              <li className="has-submenu parent-parent-menu-item">
                <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Pages</a><span className="menu-arrow"></span>
                <ul className="submenu">
                  <li><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">My Account</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="user-profile.html" className="sub-menu-item">User Account</a></li>
                      <li><a href="user-billing.html" className="sub-menu-item">Billing</a></li>
                      <li><a href="user-payment.html" className="sub-menu-item">Payment</a></li>
                      <li><a href="user-invoice.html" className="sub-menu-item">Invoice</a></li>
                      <li><a href="user-social.html" className="sub-menu-item">Social</a></li>
                      <li><a href="user-notification.html" className="sub-menu-item">Notification</a></li>
                      <li><a href="user-setting.html" className="sub-menu-item">Setting</a></li>
                    </ul> 
                  </li>
                  
                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Helpcenter</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="helpcenter.html" className="sub-menu-item">Overview</a></li>
                      <li><a href="helpcenter-faqs.html" className="sub-menu-item">FAQs</a></li>
                      <li><a href="helpcenter-guides.html" className="sub-menu-item">Guides</a></li>
                      <li><a href="helpcenter-support.html" className="sub-menu-item">Support</a></li>
                    </ul>  
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Auth Pages</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><Link href="/login" className="sub-menu-item">Login</Link></li>
                      <li><a href="signup.html" className="sub-menu-item">Signup</a></li>
                      <li><a href="forgot-password.html" className="sub-menu-item">Forgot Password</a></li>
                      <li><a href="lock-screen.html" className="sub-menu-item">Lock Screen</a></li>
                    </ul> 
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Utility</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="terms.html" className="sub-menu-item">Terms of Services</a></li>
                      <li><a href="privacy.html" className="sub-menu-item">Privacy Policy</a></li>
                    </ul>  
                  </li>

                  <li className="has-submenu parent-menu-item">
                    <a href="#" onClick={handleMenuClick} className="hover:text-[#fb2c36]">Special</a><span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li><a href="comingsoon.html" className="sub-menu-item">Coming Soon</a></li>
                      <li><a href="maintenance.html" className="sub-menu-item">Maintenance</a></li>
                      <li><a href="404.html" className="sub-menu-item">404!</a></li>
                    </ul> 
                  </li>
                </ul>
              </li>

              <li><Link href="/blog" className="sub-menu-item hover:text-[#fb2c36]">Blog</Link></li>

              <li><Link href="/contact" className="sub-menu-item hover:text-[#fb2c36]">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};