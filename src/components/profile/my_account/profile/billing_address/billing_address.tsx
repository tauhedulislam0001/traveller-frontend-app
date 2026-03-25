import React from 'react';

interface BillingAddressProps {
  customer?: {
    full_name?: string;
    billing_address?: string;
    mobile?: string;
    email?: string;
  };
}

const BillingAddress: React.FC<BillingAddressProps> = ({ customer }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Billing Address</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
          <p className="text-gray-900 dark:text-white mt-1">{customer?.full_name || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Address</label>
          <p className="text-gray-900 dark:text-white mt-1">{customer?.billing_address || 'No billing address added'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Phone</label>
          <p className="text-gray-900 dark:text-white mt-1">{customer?.mobile || 'Not provided'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-gray-400">Email</label>
          <p className="text-gray-900 dark:text-white mt-1">{customer?.email || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;