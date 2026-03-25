import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useGetMyBookingsQuery } from "@redux/services/booking/api";
import { useGetProfileQuery, useUpdateProfileMutation, useUploadProfileImageMutation } from "@redux/services/auth/api";
import { updateCustomer, clearCredentials } from "@redux/slices/authSlice";
import { RootState } from "@redux/store";
import toast from "react-hot-toast";
import AddPayment from "./my_account/add_payment_method/payment_method";
import Billing from "./my_account/billing/billing_address/billing";
import Payment from "./my_account/billing/payment_method/payment";
import Shipping from "./my_account/billing/shipping_address/shipping";
import Introduction from "./my_account/profile/introduction/introduction";
import MyTour from "./my_account/profile/my_tour/my_tour";
import Settings from "./my_account/settings/settings";
import SocialProfile from "./my_account/social_profile/social_profile";
import Link from "next/link";

export const Profiles: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [isUploading, setIsUploading] = useState(false);
  
  // Get user from Redux store
  const { customer, isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  // Check URL params for tab
  useEffect(() => {
    const { tab } = router.query;
    if (tab === 'bookings') {
      setActiveMenu('bookings');
    }
  }, [router.query]);
  
  // Fetch profile data
  const { data: profileData, isLoading: profileLoading, refetch } = useGetProfileQuery(undefined, {
    skip: !isAuthenticated,
  });
  
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadProfileImage] = useUploadProfileImageMutation();
  
  // Get bookings data
  const { data: bookingsData, isLoading: bookingsLoading, refetch: refetchBookings } = useGetMyBookingsQuery(
    { page: 1, per_page: 10 },
    { skip: !isAuthenticated }
  );

  // Menu items with bookings added
  const menuItems = [
    { id: "profile", icon: "airplay", label: "Profile", href: "#" },
    { id: "bookings", icon: "calendar", label: "My Bookings", href: "#" },
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

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please select a valid image file (JPEG, PNG, or GIF)');
      return;
    }

    const maxSize = 2 * 1024 * 1024;
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
        refetch();
        
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

  const handleCancelBooking = async (bookingId: number) => {
    // You'll need to implement cancel booking mutation
    // const result = await cancelBooking({ id: bookingId }).unwrap();
    toast.success('Booking cancelled successfully');
    refetchBookings();
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

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  const userData = profileData?.data?.customer || customer;
  const profileImage = userData?.profile_image || "/assets/images/client/16.jpg";
  const fullName = userData?.full_name || "User Name";
  const email = userData?.email || "user@example.com";

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
          
          {/* Action Buttons */}
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
                {menuItems.map((item) => {
                  const getIcon = () => {
                    switch(item.icon) {
                      case "airplay": return (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      );
                      case "calendar": return (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      );
                      default: return null;
                    }
                  };
                  
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === item.id
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-l-4 border-red-500'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-red-500 dark:hover:text-red-400'
                      }`}
                      onClick={() => {
                        if (item.id === "logout") {
                          handleLogout();
                        } else {
                          setActiveMenu(item.id);
                        }
                      }}
                    >
                      <span className="mr-3">
                        {item.icon === "airplay" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.icon === "calendar" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {/* Add other icons as needed */}
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </div>
                  );
                })}
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
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Profile Section */}
            {activeMenu === "profile" && (
              <>
                <Introduction customer={userData} />
                <MyTour userId={userData?.id} />
              </>
            )}

            {/* Bookings Section */}
            {activeMenu === "bookings" && (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-6">My Bookings</h5>
                
                {bookingsLoading ? (
                  <div className="text-center py-8">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-gray-500">Loading bookings...</p>
                  </div>
                ) : bookingsData?.data?.data?.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📅</div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">No Bookings Yet</h3>
                    <p className="text-gray-500 mb-4">You haven't made any bookings yet.</p>
                    <button 
                      onClick={() => router.push('/tour-package')}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Browse Tours
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookingsData?.data?.data?.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <img 
                                src={booking.featured_image || '/assets/images/placeholder.jpg'} 
                                alt={booking.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-800 dark:text-white">{booking.title}</h4>
                                <p className="text-sm text-gray-500">Booking ID: {booking.booking_id}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                              <div>
                                <span className="text-gray-500">Start Date:</span>
                                <span className="ml-2 text-gray-700 dark:text-gray-300">
                                  {new Date(booking.tour_start_date).toLocaleDateString()}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500">Guests:</span>
                                <span className="ml-2 text-gray-700 dark:text-gray-300">{booking.number_of_guests}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Total Amount:</span>
                                <span className="ml-2 font-semibold text-red-500">${booking.amount.toFixed(2)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Status:</span>
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                                  booking.tour_status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                  booking.tour_status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                  booking.tour_status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                  'bg-blue-100 text-blue-700'
                                }`}>
                                  {booking.tour_status.charAt(0).toUpperCase() + booking.tour_status.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link 
                              href={`/booking/${booking.id}`}
                              className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                            >
                              View Details
                            </Link>
                            {booking.tour_status === 'pending' && (
                              <button 
                                onClick={() => handleCancelBooking(booking.id)}
                                className="px-3 py-1.5 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                {bookingsData?.data?.last_page > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    <button 
                      disabled={bookingsData.data.current_page === 1}
                      className="px-3 py-1 border rounded-lg disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-1">
                      Page {bookingsData.data.current_page} of {bookingsData.data.last_page}
                    </span>
                    <button 
                      disabled={bookingsData.data.current_page === bookingsData.data.last_page}
                      className="px-3 py-1 border rounded-lg disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
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
            {!["profile", "bookings", "billing", "payment", "settings", "social"].includes(activeMenu) && activeMenu !== "logout" && (
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

export default Profiles;