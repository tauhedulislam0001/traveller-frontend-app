import React, { useState, useEffect } from "react";
import Link from "next/link";
import Introduction from "./my_account/profile/introduction/introduction";
import MyTour from "./my_account/profile/my_tour/my_tour";
import Billing from "./my_account/billing/billing_address/billing";
import Shipping from "./my_account/billing/shipping_address/shipping";
import Payment from "./my_account/billing/payment_method/payment";
import AddPayment from "./my_account/add_payment_method/payment_method";
import SocialProfile from "./my_account/social_profile/social_profile";
import Settings from "./my_account/settings/settings";

export const Profiles: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [profileImage, setProfileImage] = useState("/assets/images/client/16.jpg");

  // User tours data
  const userTours = [
    {
      id: 1,
      title: "Cuba Sailing Adventure",
      location: "Dubai",
      image: "/assets/images/listing/1.jpg",
      rating: 5,
      reviews: 30,
      discount: "10% Off",
      price: "$58 / Day",
      liked: false
    },
    {
      id: 2,
      title: "Tour in New York",
      location: "Italy",
      image: "/assets/images/listing/2.jpg",
      rating: 5,
      reviews: 30,
      discount: null,
      price: "$58 / Day",
      liked: false
    },
    {
      id: 3,
      title: "Discover Greece",
      location: "Maldivas",
      image: "/assets/images/listing/3.jpg",
      rating: 5,
      reviews: 30,
      discount: null,
      price: "$58 / Day",
      liked: false
    },
    {
      id: 4,
      title: "Museum of Modern Art",
      location: "USA",
      image: "/assets/images/listing/4.jpg",
      rating: 5,
      reviews: 30,
      discount: null,
      price: "$58 / Day",
      liked: false
    },
    {
      id: 5,
      title: "Peek Mountain View",
      location: "Bali",
      image: "/assets/images/listing/5.jpg",
      rating: 5,
      reviews: 30,
      discount: null,
      price: "$58 / Day",
      liked: false
    },
    {
      id: 6,
      title: "Hot Baloon Journey",
      location: "Bangkok",
      image: "/assets/images/listing/6.jpg",
      rating: 5,
      reviews: 30,
      discount: "25% Off",
      price: "$58 / Day",
      liked: false
    }
  ];

  // Menu items
  const menuItems = [
    { id: "profile", icon: "airplay", label: "Profile", href: "#" },
    { id: "billing", icon: "edit", label: "Billing", href: "#" },
    { id: "payment", icon: "credit-card", label: "Payment", href: "#" },
    { id: "invoice", icon: "file-text", label: "Invoice", href: "#" },
    { id: "social", icon: "share-2", label: "Social Profile", href: "#" },
    { id: "notification", icon: "bell", label: "Notifications", href: "#" },
    { id: "settings", icon: "settings", label: "Settings", href: "#" },
    { id: "logout", icon: "log-out", label: "Sign Out", href: "#" }
  ];

  // Billing address data
  const billingAddress = {
    name: "Jesus Zamora",
    address: "C/54 Northwest Freeway, Suite 558, Houston, USA 485",
    phone: "+123 897 5468",
    email: "jesus@hotmail.com"
  };

  // Shipping address data (same as billing for now)
  const shippingAddress = {
    name: "Jesus Zamora",
    address: "C/54 Northwest Freeway, Suite 558, Houston, USA 485",
    phone: "+123 897 5468",
    email: "jesus@hotmail.com"
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleLike = (id: number) => {
    console.log("Toggle like for tour:", id);
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Banner Header Section */}
      <section className="relative w-full pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 bg-gradient-to-r from-red-600 via-red-500 to-red-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* User Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src={profileImage} 
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
                <label 
                  htmlFor="pro-img"
                  className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg border-2 border-white hover:bg-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input 
                    id="pro-img" 
                    name="profile-image" 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Jesus Zamora</h1>
                <p className="text-red-100 mb-3">jesus@hotmail.com</p>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Premium Member</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Verified</span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">24</div>
                <div className="text-red-100 text-sm md:text-base">Tours</div>
              </div>
              <div className="h-8 md:h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">156</div>
                <div className="text-red-100 text-sm md:text-base">Hours</div>
              </div>
              <div className="h-8 md:h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.8</div>
                <div className="text-red-100 text-sm md:text-base">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </button>
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Security
            </button>
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 -mt-8 md:-mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Account Menu</h3>
              
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      activeMenu === item.id
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-l-4 border-red-500'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-400'
                    }`}
                    onClick={() => setActiveMenu(item.id)}
                  >
                    <span className="mr-3">
                      {item.icon === "airplay" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.icon === "edit" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      )}
                      {item.icon === "credit-card" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      {item.icon === "file-text" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {item.icon === "share-2" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      )}
                      {item.icon === "bell" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      )}
                      {item.icon === "settings" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {item.icon === "log-out" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      )}
                    </span>
                    <a 
                      href={item.href} 
                      className="flex-1"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveMenu(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </nav>
              
              {/* Profile Completion */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Profile Completion</span>
                  <span className="text-sm font-semibold text-red-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Conditional Rendering based on active menu */}
          <div className="lg:w-3/4">
            {/* Profile Section */}
            {activeMenu === "profile" && (
              <>
                {/* Introduction Section */}
                <Introduction />
                
                {/* My Tours Section */}
                <MyTour userTours={userTours} toggleLike={toggleLike} />
              </>
            )}

            {/* Billing Section */}
            {activeMenu === "billing" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h6 className="text-gray-500 dark:text-gray-400 mb-6">
                  The following addresses will be used on the checkout page by default.
                </h6>
                
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {/* Billing Address */}
                  <Billing billingAddress={billingAddress}/>
                  
                  {/* Shipping Address */} 
                  <Shipping shippingAddress={shippingAddress} />
                </div>

                {/* Payment Methods in Billing Section */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Payment Methods</h5>
                  <Payment />
                </div>
              </div>
            )}

            {/* Payment Section */}
            {activeMenu === "payment" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Payment Methods</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Manage your payment methods and add new ones for faster checkout.
                </p>
                <AddPayment />
              </div>
            )}

            {/* Payment Section */}
            {activeMenu === "social" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Social Profiles :</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Add Your Social Profiles Links.
                </p>
                <SocialProfile />
              </div>
            )}

            {/* Payment Section */}
            {activeMenu === "settings" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Settings :</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Add Your Information Here
                </p>
                <Settings />
              </div>
            )}

            {/* Other sections can be added similarly */}
            {(!["profile", "billing", "payment", "settings", "social"].includes(activeMenu)) && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {menuItems.find(item => item.id === activeMenu)?.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This section is under development. Content for {menuItems.find(item => item.id === activeMenu)?.label} will be added soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};