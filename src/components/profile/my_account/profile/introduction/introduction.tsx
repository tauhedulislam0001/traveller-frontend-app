import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateProfileMutation } from '@redux/services/auth/api';
import { updateCustomer } from '@redux/slices/authSlice';
import toast from 'react-hot-toast';

interface IntroductionProps {
  customer?: {
    id?: number;
    description?: string;
    full_name?: string;
  };
}

function Introduction({ customer }: IntroductionProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(customer?.description || '');
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleEdit = () => {
    setDescription(customer?.description || '');
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDescription(customer?.description || '');
  };

  const handleSave = async () => {
    try {
      const result = await updateProfile({ description }).unwrap();
      
      if (result.success) {
        // Update Redux store
        dispatch(updateCustomer({ description }));
        toast.success('Bio updated successfully!');
        setIsEditing(false);
      }
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error?.data?.message || 'Failed to update bio');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Introduction</h3>
        {!isEditing && (
          <button 
            onClick={handleEdit}
            className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Bio
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-lg outline-none border border-gray-200 dark:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            placeholder="Tell us about yourself..."
            disabled={isLoading}
          />
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-600 dark:text-gray-300">
          {customer?.description ? (
            <p className="whitespace-pre-wrap">{customer.description}</p>
          ) : (
            <p className="text-gray-400 dark:text-gray-500 italic">
              No bio added yet. Click "Edit Bio" to tell us about yourself.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Introduction;