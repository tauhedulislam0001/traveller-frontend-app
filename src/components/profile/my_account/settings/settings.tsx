import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateProfileMutation, useChangePasswordMutation } from '@redux/services/auth/api';
import { updateCustomer } from '@redux/slices/authSlice';
import { RootState } from '@redux/store';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'react-feather';

function Settings() {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: RootState) => state.auth);
  
  const [updateProfile, { isLoading: isUpdatingProfile }] = useUpdateProfileMutation();
  const [changePassword, { isLoading: isChangingPassword }] = useChangePasswordMutation();
  
  // Personal Details State
  const [personalDetails, setPersonalDetails] = useState({
    full_name: '',
    email: '',
    occupation: '',
    description: '',
  });
  
  // Contact Info State
  const [contactInfo, setContactInfo] = useState({
    mobile: '',
    website_url: '',
  });
  
  // Password State
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  });
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Load customer data
  useEffect(() => {
    if (customer) {
      setPersonalDetails({
        full_name: customer.full_name || '',
        email: customer.email || '',
        occupation: customer.occupation || '',
        description: customer.description || '',
      });
      
      setContactInfo({
        mobile: customer.mobile || '',
        website_url: customer.website_url || '',
      });
    }
  }, [customer]);

  // Handle Personal Details Input Changes
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalDetails(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle Contact Info Changes
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle Password Changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };
  
  // Save Personal Details
  const handleSavePersonalDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const updateData: any = {};
    
    // Only include fields that have changed
    if (personalDetails.full_name !== customer?.full_name) {
      updateData.full_name = personalDetails.full_name;
    }
    if (personalDetails.email !== customer?.email) {
      updateData.email = personalDetails.email;
    }
    // Always include occupation if it has a value, even if it's empty string
    if (personalDetails.occupation !== customer?.occupation) {
      updateData.occupation = personalDetails.occupation;
    }
    if (personalDetails.description !== customer?.description) {
      updateData.description = personalDetails.description;
    }
    
    if (Object.keys(updateData).length === 0) {
      toast.error('No changes to save');
      return;
    }
    
    try {
      const result = await updateProfile(updateData).unwrap();
      if (result.success) {
        dispatch(updateCustomer(updateData));
        toast.success('Personal details updated successfully!');
      }
    } catch (error: any) {
      console.error('Update error:', error);
      if (error?.data?.errors) {
        Object.values(error.data.errors).forEach((err: any) => {
          toast.error(err[0]);
        });
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Failed to update personal details');
      }
    }
  };
  
  // Save Contact Info
  const handleSaveContactInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const updateData: any = {};
    
    if (contactInfo.mobile !== customer?.mobile) {
      updateData.mobile = contactInfo.mobile;
    }
    if (contactInfo.website_url !== customer?.website_url) {
      updateData.website_url = contactInfo.website_url;
    }
    
    if (Object.keys(updateData).length === 0) {
      toast.error('No changes to save');
      return;
    }
    
    try {
      const result = await updateProfile(updateData).unwrap();
      if (result.success) {
        dispatch(updateCustomer(updateData));
        toast.success('Contact info updated successfully!');
      }
    } catch (error: any) {
      console.error('Update error:', error);
      if (error?.data?.errors) {
        Object.values(error.data.errors).forEach((err: any) => {
          toast.error(err[0]);
        });
      } else {
        toast.error('Failed to update contact info');
      }
    }
  };
  
  // Change Password
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordData.current_password) {
      toast.error('Current password is required');
      return;
    }
    
    if (!passwordData.new_password) {
      toast.error('New password is required');
      return;
    }
    
    if (passwordData.new_password !== passwordData.new_password_confirmation) {
      toast.error('New passwords do not match');
      return;
    }
    
    if (passwordData.new_password.length < 8) {
      toast.error('New password must be at least 8 characters');
      return;
    }
    
    try {
      const result = await changePassword({
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
        new_password_confirmation: passwordData.new_password_confirmation,
      }).unwrap();
      
      if (result.success) {
        toast.success('Password changed successfully!');
        setPasswordData({
          current_password: '',
          new_password: '',
          new_password_confirmation: '',
        });
      }
    } catch (error: any) {
      console.error('Password change error:', error);
      if (error?.data?.errors) {
        Object.values(error.data.errors).forEach((err: any) => {
          toast.error(err[0]);
        });
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Failed to change password');
      }
    }
  };
  
  // Delete Account (Placeholder - implement as needed)
  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      toast.error('Account deletion not implemented yet');
    }
  };
  
  return (
    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
      {/* Personal Details Section */}
      <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
        <form onSubmit={handleSavePersonalDetails}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="form-label font-medium">Full Name : <span className="text-red-600">*</span></label>
              <div className="relative mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  type="text" 
                  name="full_name"
                  value={personalDetails.full_name}
                  onChange={handlePersonalChange}
                  className="pl-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                  placeholder="Full Name"
                  required
                  disabled={isUpdatingProfile}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Email : <span className="text-red-600">*</span></label>
              <div className="relative mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  name="email"
                  value={personalDetails.email}
                  onChange={handlePersonalChange}
                  className="pl-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                  placeholder="Email"
                  required
                  disabled={isUpdatingProfile}
                />
              </div>
            </div>
            <div>
              <label className="form-label font-medium">Occupation :</label>
              <div className="relative mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  name="occupation"
                  value={personalDetails.occupation}
                  onChange={handlePersonalChange}
                  type="text" 
                  className="pl-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                  placeholder="Occupation"
                  disabled={isUpdatingProfile}
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <label className="form-label font-medium">Description :</label>
              <div className="relative mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <textarea 
                  name="description"
                  value={personalDetails.description}
                  onChange={handlePersonalChange}
                  rows={4}
                  className="pl-10 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                  placeholder="Tell us about yourself..."
                  disabled={isUpdatingProfile}
                />
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={isUpdatingProfile}
            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 text-white rounded-md mt-5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isUpdatingProfile ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
      
      {/* Contact Info & Change Password Section */}
      <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
            <form onSubmit={handleSaveContactInfo}>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="form-label font-medium">Phone No. :</label>
                  <div className="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <input 
                      name="mobile"
                      value={contactInfo.mobile}
                      onChange={handleContactChange}
                      type="tel" 
                      className="pl-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                      placeholder="Phone Number"
                      disabled={isUpdatingProfile}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="form-label font-medium">Website :</label>
                  <div className="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
                    </svg>
                    <input 
                      name="website_url"
                      value={contactInfo.website_url}
                      onChange={handleContactChange}
                      type="url" 
                      className="pl-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                      placeholder="Website URL"
                      disabled={isUpdatingProfile}
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={isUpdatingProfile}
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 text-white rounded-md mt-5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isUpdatingProfile ? 'Saving...' : 'Save Contact Info'}
              </button>
            </form>
          </div>
          
          {/* Change Password */}
          <div> 
            <h5 className="text-lg font-semibold mb-4">Change password :</h5>
            <form onSubmit={handleChangePassword}>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="form-label font-medium">Old password :</label>
                  <div className="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input 
                      type={showCurrentPassword ? "text" : "password"}
                      name="current_password"
                      value={passwordData.current_password}
                      onChange={handlePasswordChange}
                      className="pl-10 pr-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                      placeholder="Old password"
                      required
                      disabled={isChangingPassword}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="form-label font-medium">New password :</label>
                  <div className="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input 
                      type={showNewPassword ? "text" : "password"}
                      name="new_password"
                      value={passwordData.new_password}
                      onChange={handlePasswordChange}
                      className="pl-10 pr-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                      placeholder="New password"
                      required
                      disabled={isChangingPassword}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="form-label font-medium">Re-type New password :</label>
                  <div className="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-3 left-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input 
                      type={showConfirmPassword ? "text" : "password"}
                      name="new_password_confirmation"
                      value={passwordData.new_password_confirmation}
                      onChange={handlePasswordChange}
                      className="pl-10 pr-10 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
                      placeholder="Re-type New password"
                      required
                      disabled={isChangingPassword}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={isChangingPassword}
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 text-white rounded-md mt-5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isChangingPassword ? 'Saving...' : 'Save password'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Delete Account Section */}
      <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
        <h5 className="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>
        <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>
        <button 
          onClick={handleDeleteAccount}
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Settings;