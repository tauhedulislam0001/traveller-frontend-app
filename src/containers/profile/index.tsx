import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useUpdateProfileMutation, useUploadProfileImageMutation } from "@redux/services/auth/api";
import { updateCustomer, clearCredentials } from "@redux/slices/authSlice";
import { RootState } from "@redux/store";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import AddPayment from "@components/profile/my_account/add_payment_method/payment_method";
import Billing from "@components/profile/my_account/billing/billing_address/billing";
import Payment from "@components/profile/my_account/billing/payment_method/payment";
import Shipping from "@components/profile/my_account/billing/shipping_address/shipping";
import Introduction from "@components/profile/my_account/profile/introduction/introduction";
import MyTour from "@components/profile/my_account/profile/my_tour/my_tour";
import Settings from "@components/profile/my_account/settings/settings";
import SocialProfile from "@components/profile/my_account/social_profile/social_profile";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [isUploading, setIsUploading] = useState(false);
  
  // Get user from Redux store
  const { customer, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  // Fetch profile data
  const { data: profileData, isLoading: profileLoading, refetch } = useGetProfileQuery(undefined, {
    skip: !isAuthenticated,
  });
  
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadProfileImage] = useUploadProfileImageMutation();


  useEffect(() => {
  console.log('=== HEADER DEBUG ===');
  console.log('isAuthenticated:', isAuthenticated);
  console.log('Customer object:', customer);
  console.log('Profile image URL:', customer?.profile_image);
  console.log('Full customer data:', JSON.stringify(customer, null, 2));
}, [customer, isAuthenticated]);
  // User tours data (replace with API data when available)
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

  // Billing address data from API
  const billingAddress = {
    name: customer?.full_name || "Not Provided",
    address: customer?.billing_address || "No billing address added",
    phone: customer?.mobile || "Not Provided",
    email: customer?.email || "Not Provided"
  };

  // Shipping address data from API
  const shippingAddress = {
    name: customer?.full_name || "Not Provided",
    address: customer?.shipping_address || "No shipping address added",
    phone: customer?.mobile || "Not Provided",
    email: customer?.email || "Not Provided"
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please select a valid image file (JPEG, PNG, or GIF)');
      return;
    }

    // Validate file size (max 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      toast.error('Image size must be less than 2MB');
      return;
    }

    setIsUploading(true);
    
    const formData = new FormData();
    formData.append('profile_image', file);

    try {
      const result = await uploadProfileImage(formData).unwrap();
      
      if (result.success) {
        toast.success('Profile image updated successfully!');
        refetch(); // Refresh profile data
        
        // Update Redux store
        if (customer) {
          dispatch(updateCustomer({ profile_image: result.data.profile_image }));
        }
      }
    } catch (error: any) {
      console.error('Image upload error:', error);
      
      if (error?.data?.errors?.profile_image) {
        toast.error(error.data.errors.profile_image[0]);
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Failed to upload image. Please try again.');
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleLogout = async () => {
    dispatch(clearCredentials());
    router.push('/login');
    toast.success('Logged out successfully');
  };

  const toggleLike = (id: number) => {
    console.log("Toggle like for tour:", id);
  };

  if (!isMounted || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading Profile...</p>
        </div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  const userData = profileData?.data?.customer || customer;
  const profileImage = userData?.profile_image || "/assets/images/client/16.jpg";
  const fullName = userData?.full_name || "User Name";
  const email = userData?.email || "user@example.com";

  // Calculate profile completion percentage (excluding sensitive fields)
  const profileFields = [
    userData?.full_name,
    userData?.email,
    userData?.mobile,
    userData?.occupation,
    userData?.billing_address,
    userData?.shipping_address,
    userData?.company_name,
    userData?.website_url,
  ];
  const filledFields = profileFields.filter(field => field && field !== "" && field !== null).length;
  const completionPercentage = Math.min(Math.floor((filledFields / profileFields.length) * 100), 100);

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
                    alt={fullName}
                  />
                </div>
                <label 
                  htmlFor="pro-img"
                  className={`absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg border-2 border-white transition-colors ${
                    isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'
                  }`}
                >
                  {isUploading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  <input 
                    id="pro-img" 
                    name="profile-image" 
                    type="file" 
                    className="hidden" 
                    accept="image/jpeg,image/jpg,image/png,image/gif"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                  />
                </label>
              </div>
              
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{fullName}</h1>
                <p className="text-red-100 mb-3">{email}</p>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span className="bg-white/20 px-3 py-1 rounded-full">
                    {userData?.status === 1 ? "Active Member" : "Member"}
                  </span>
                  {userData?.company_name && (
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {userData.company_name}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-red-100 text-sm md:text-base">Tours</div>
              </div>
              <div className="h-8 md:h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-red-100 text-sm md:text-base">Hours</div>
              </div>
              <div className="h-8 md:h-12 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">0</div>
                <div className="text-red-100 text-sm md:text-base">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons - Edit Profile */}
          <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
            <button 
              onClick={() => setActiveMenu("profile")}
              className="px-4 md:px-6 py-2 md:py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
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
                    onClick={() => {
                      if (item.id === "logout") {
                        handleLogout();
                      } else {
                        setActiveMenu(item.id);
                      }
                    }}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      activeMenu === item.id && item.id !== "logout"
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-l-4 border-red-500'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-400'
                    }`}
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
                    <span className="flex-1">{item.label}</span>
                  </div>
                ))}
              </nav>
              
              {/* Profile Completion */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Profile Completion</span>
                  <span className="text-sm font-semibold text-red-500">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content - Conditional Rendering based on active menu */}
          <div className="lg:w-3/4">
            {/* Profile Section */}
            {activeMenu === "profile" && (
              <>
                <Introduction customer={userData} />
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
                  <Billing billingAddress={billingAddress}/>
                  <Shipping shippingAddress={shippingAddress} />
                </div>

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

            {/* Social Section */}
            {activeMenu === "social" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Social Profiles :</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Add Your Social Profiles Links.
                </p>
                <SocialProfile customer={userData} />
              </div>
            )}

            {/* Settings Section */}
            {activeMenu === "settings" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Settings :</h5>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Add Your Information Here
                </p>
                <Settings />
              </div>
            )}

            {/* Other sections */}
            {!["profile", "billing", "payment", "settings", "social"].includes(activeMenu) && activeMenu !== "logout" && (
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

export default UserProfile;