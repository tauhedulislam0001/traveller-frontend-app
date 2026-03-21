import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "@redux/services/auth/api";
import { clearCredentials } from "@redux/slices/authSlice";
import { RootState } from "@redux/store";
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
  LogOut,
  Home,
  Compass,
  Calendar,
  BookOpen,
  User as UserIcon,
  Menu,
  X
} from "react-feather";

export const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // State to handle mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // State for dropdowns
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Get authentication state from Redux
  const { isAuthenticated, customer } = useSelector((state: RootState) => state.auth);
  
  const [logout] = useLogoutMutation();

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

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Still clear local state even if API call fails
      dispatch(clearCredentials());
      router.push('/');
    }
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
                  <span className="ms-2 text-slate-300">Sat-Fri: 9am to 8pm</span>
                </li>
                <li className="inline-flex items-center ms-2">
                  <MapPin className="size-4" style={{ color: themeColor }} />
                  <span className="ms-2 text-slate-300">Grand Plaza, 2nd floor, Wireless, Moghbazar</span>
                </li>
              </ul>

              <ul className="list-none">
                <li className="inline-flex items-center">
                  <Mail className="size-4" style={{ color: themeColor }} />
                  <a href="mailto:travellerbdofficial@gmail.com" className="ms-2 text-slate-300 hover:text-slate-200">travellerbdofficial@gmail.com</a>
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
                {menuOpen ? (
                  <X className="w-6 h-6 text-slate-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900 dark:text-white" />
                )}
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
      
            {/* Profile Dropdown - Only show when logged in */}
            {isAuthenticated && (
              <li className="dropdown inline-block relative ps-0.5" ref={profileDropdownRef}>
                <button 
                  onClick={toggleProfileDropdown}
                  className="dropdown-toggle items-center" 
                  type="button"
                >
                  <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border" style={{ borderColor: themeColor, backgroundColor: themeColor }}>
                    {customer?.profile_image ? (
                      <img src={customer.profile_image} className="rounded-md w-full h-full object-cover" alt={customer.full_name} />
                    ) : (
                      <User className="size-4 text-white" />
                    )}
                  </span>
                </button>
                <div 
                  className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 transition-all duration-200 ${profileDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} 
                  onClick={stopPropagation}
                >
                  <ul className="py-2 text-start">
                    <li>
                      <Link href="/profile" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                        <User className="size-4 me-2" style={{ color: themeColor }} />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                        <HelpCircle className="size-4 me-2" style={{ color: themeColor }} />
                        Helpcenter
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                        <Settings className="size-4 me-2" style={{ color: themeColor }} />
                        Settings
                      </Link>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                    <li>
                      <button onClick={handleLogout} className="w-full text-left">
                        <div className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-[#fb2c36] dark:hover:text-white">
                          <LogOut className="size-4 me-2" style={{ color: themeColor }} />
                          Logout
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
          
          {/* Desktop Navigation */}
          <div id="navigation" className={menuOpen ? "block" : "hidden md:block"}>
            <ul className="navigation-menu nav-right !justify-end nav-light">
              <li><Link href="/" className="sub-menu-item hover:text-[#fb2c36]">Home</Link></li>
              <li><Link href="/tour-package" className="sub-menu-item hover:text-[#fb2c36]">Tour Package</Link></li>
              <li><Link href="/blog" className="sub-menu-item hover:text-[#fb2c36]">Blog</Link></li>
              <li><Link href="/aboutus" className="sub-menu-item hover:text-[#fb2c36]">About Us</Link></li>
              <li><Link href="/contact" className="sub-menu-item hover:text-[#fb2c36]">Contact Us</Link></li>
              {!isAuthenticated && (
                <>
                  <li><Link href="/login" className="sub-menu-item hover:text-[#fb2c36]">Login</Link></li>
                  <li><Link href="/signup" className="sub-menu-item hover:text-[#fb2c36]">Signup</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar - Professional App Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-lg lg:hidden z-50">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center py-1 px-3">
            <div className="flex flex-col items-center">
              <Home className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Home</span>
            </div>
          </Link>
          
          <Link href="/tour-package" className="flex flex-col items-center py-1 px-3">
            <div className="flex flex-col items-center">
              <Compass className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Tours</span>
            </div>
          </Link>
          
          <Link href="/blog" className="flex flex-col items-center py-1 px-3">
            <div className="flex flex-col items-center">
              <BookOpen className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Blog</span>
            </div>
          </Link>
          
          <Link href="/aboutus" className="flex flex-col items-center py-1 px-3">
            <div className="flex flex-col items-center">
              <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">About</span>
            </div>
          </Link>
          
          {isAuthenticated ? (
            <Link href="/profile" className="flex flex-col items-center py-1 px-3">
              <div className="flex flex-col items-center">
                <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Profile</span>
              </div>
            </Link>
          ) : (
            <Link href="/login" className="flex flex-col items-center py-1 px-3">
              <div className="flex flex-col items-center">
                <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Account</span>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Add padding bottom on mobile to prevent content from being hidden behind bottom nav */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          body {
            padding-bottom: 65px;
          }
        }
      `}</style>
    </div>
  );
};