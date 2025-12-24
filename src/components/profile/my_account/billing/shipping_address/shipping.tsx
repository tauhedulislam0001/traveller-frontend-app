// Shipping.tsx
import React from 'react'

interface Address {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface ShippingProps {
  shippingAddress: Address;
  onEdit?: () => void;
}

function Shipping({ shippingAddress, onEdit }: ShippingProps) {
  return (
    <div className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-900/50">
      <div className="flex items-center mb-4 justify-between">
        <h5 className="text-xl font-bold text-gray-800 dark:text-white">Shipping Address:</h5>
        <button 
          onClick={onEdit}
          className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          aria-label="Edit shipping address"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>
      
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{shippingAddress.name}</p>
        
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300">{shippingAddress.address}</p>
          </li>

          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300">{shippingAddress.phone}</p>
          </li>

          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300">{shippingAddress.email}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Shipping