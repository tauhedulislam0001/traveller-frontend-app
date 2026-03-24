import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateProfileMutation } from '@redux/services/auth/api';
import { updateCustomer } from '@redux/slices/authSlice';
import toast from 'react-hot-toast';

interface SocialProfileProps {
  customer?: {
    id?: number;
    full_name?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

function SocialProfile({ customer }: SocialProfileProps) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  });
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (customer) {
      setFormData({
        twitter: customer.twitter || '',
        facebook: customer.facebook || '',
        instagram: customer.instagram || '',
        linkedin: customer.linkedin || '',
        youtube: customer.youtube || '',
      });
    }
  }, [customer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const updateData: any = {};
    
    if (formData.twitter) updateData.twitter = formData.twitter;
    if (formData.facebook) updateData.facebook = formData.facebook;
    if (formData.instagram) updateData.instagram = formData.instagram;
    if (formData.linkedin) updateData.linkedin = formData.linkedin;
    if (formData.youtube) updateData.youtube = formData.youtube;
    
    if (Object.keys(updateData).length === 0) {
      toast.error('No social profiles to update');
      return;
    }
    
    try {
      const result = await updateProfile(updateData).unwrap();
      
      if (result.success) {
        dispatch(updateCustomer({
          twitter: formData.twitter,
          facebook: formData.facebook,
          instagram: formData.instagram,
          linkedin: formData.linkedin,
          youtube: formData.youtube,
        }));
        toast.success('Social profiles updated successfully!');
      }
    } catch (error: any) {
      console.error('Update error:', error);
      
      if (error?.data?.errors) {
        const errors = error.data.errors;
        Object.keys(errors).forEach(key => {
          toast.error(`${key}: ${errors[key][0]}`);
        });
      } else if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error('Failed to update social profiles');
      }
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        {/* Twitter Field */}
        <div className="md:flex">
          <div className="md:w-1/3">
            <span className="font-medium">Twitter</span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <input 
              type="text" 
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
              placeholder="Twitter Profile URL (e.g., https://twitter.com/username)"
              disabled={isLoading}
            />
            <p className="text-slate-400 mt-1 text-sm">Add your Twitter profile URL</p>
          </div>
        </div>
        
        {/* Facebook Field */}
        <div className="md:flex mt-8">
          <div className="md:w-1/3">
            <span className="font-medium">Facebook</span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <input 
              type="text" 
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
              placeholder="Facebook Profile URL (e.g., https://facebook.com/username)"
              disabled={isLoading}
            />
            <p className="text-slate-400 mt-1 text-sm">Add your Facebook profile URL</p>
          </div>
        </div>
        
        {/* Instagram Field */}
        <div className="md:flex mt-8">
          <div className="md:w-1/3">
            <span className="font-medium">Instagram</span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <input 
              type="text" 
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
              placeholder="Instagram Profile URL (e.g., https://instagram.com/username)"
              disabled={isLoading}
            />
            <p className="text-slate-400 mt-1 text-sm">Add your Instagram profile URL</p>
          </div>
        </div>
        
        {/* LinkedIn Field */}
        <div className="md:flex mt-8">
          <div className="md:w-1/3">
            <span className="font-medium">LinkedIn</span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <input 
              type="text" 
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
              placeholder="LinkedIn Profile URL (e.g., https://linkedin.com/in/username)"
              disabled={isLoading}
            />
            <p className="text-slate-400 mt-1 text-sm">Add your LinkedIn profile URL</p>
          </div>
        </div>
        
        {/* YouTube Field */}
        <div className="md:flex mt-8">
          <div className="md:w-1/3">
            <span className="font-medium">YouTube</span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <input 
              type="text" 
              name="youtube"
              value={formData.youtube}
              onChange={handleInputChange}
              className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all" 
              placeholder="YouTube Channel URL (e.g., https://youtube.com/c/channelname)"
              disabled={isLoading}
            />
            <p className="text-slate-400 mt-1 text-sm">Add your YouTube channel URL</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:flex mt-8">
          <div className="md:w-1/3">
            <span className="font-medium"></span>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <button 
              type="submit"
              disabled={isLoading}
              className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 hover:bg-red-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                'Save Social Profiles'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SocialProfile;