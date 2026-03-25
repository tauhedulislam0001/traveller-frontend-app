import React from 'react';

interface PersonalInfoProps {
  customer?: {
    full_name?: string;
    email?: string;
    mobile?: string;
    occupation?: string;
    company_name?: string;
    website_url?: string;
    status?: number;
    created_at?: string;
  };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ customer }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Personal Information</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">{customer?.full_name || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Email Address</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">{customer?.email || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Phone Number</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">{customer?.mobile || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Occupation</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">{customer?.occupation || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Company Name</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">{customer?.company_name || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Website URL</label>
          {customer?.website_url ? (
            <a href={customer.website_url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 font-medium mt-1 block">
              {customer.website_url}
            </a>
          ) : (
            <p className="text-gray-900 dark:text-white font-medium mt-1">Not provided</p>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Account Status</label>
          <p className="mt-1">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${customer?.status === 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
              {customer?.status === 1 ? 'Active' : 'Inactive'}
            </span>
          </p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Member Since</label>
          <p className="text-gray-900 dark:text-white font-medium mt-1">
            {customer?.created_at ? new Date(customer.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'Not available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;