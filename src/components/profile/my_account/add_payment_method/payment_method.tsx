// payment.tsx
import React, { useState } from 'react';

interface PaymentMethod {
  id: number;
  type: string;
  image: string;
  name: string;
  number: string;
  expiry: string;
}

function AddPayment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: 'visa',
      image: '/assets/images/payments/visa.jpg',
      name: 'Visa',
      number: 'ending in 4578',
      expiry: 'Expires in 12/2022'
    },
    {
      id: 2,
      type: 'american-express',
      image: '/assets/images/payments/american-express.jpg',
      name: 'American Express',
      number: 'ending in 4578',
      expiry: 'Expires in 12/2022'
    },
    {
      id: 3,
      type: 'discover',
      image: '/assets/images/payments/discover.jpg',
      name: 'Discover',
      number: 'ending in 4578',
      expiry: 'Expires in 12/2022'
    },
    {
      id: 4,
      type: 'mastercard',
      image: '/assets/images/payments/mastercard.jpg',
      name: 'Master Card',
      number: 'ending in 4578',
      expiry: 'Expires in 12/2022'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: 'Jan',
    expiryYear: '2022',
    cardType: 'Visa'
  });

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this payment method?')) {
      setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Adding payment method:', formData);
    
    // Add new payment method to the list
    const newMethod: PaymentMethod = {
      id: paymentMethods.length + 1,
      type: formData.cardType.toLowerCase(),
      image: `/assets/images/payments/${formData.cardType.toLowerCase()}.jpg`,
      name: formData.cardType,
      number: `ending in ${formData.cardNumber.slice(-4)}`,
      expiry: `Expires in ${formData.expiryMonth}/${formData.expiryYear}`
    };
    
    setPaymentMethods([...paymentMethods, newMethod]);
    setIsModalOpen(false);
    setFormData({
      name: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: 'Jan',
      expiryYear: '2022',
      cardType: 'Visa'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h5 className="text-xl font-semibold text-gray-800 dark:text-white">Payment Methods</h5>
          <p className="text-slate-400 dark:text-gray-400 mt-2">Primary payment method is used by default</p>
        </div>

        <div className="px-6">
          <ul>
            {paymentMethods.map((method, index) => (
              <li 
                key={method.id} 
                className={`flex justify-between items-center py-6 ${
                  index > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''
                }`}
              >
                <div className="flex items-center">
                  <img 
                    src={method.image} 
                    className="rounded shadow-sm dark:shadow-gray-800 w-12 h-8 object-cover" 
                    alt={method.name}
                  />
                  <div className="ms-3">
                    <p className="font-semibold text-gray-800 dark:text-white">{method.name} {method.number}</p>
                    <p className="text-slate-400 dark:text-gray-400 text-sm">{method.expiry}</p>
                  </div>
                </div>

                <div>
                  <button 
                    onClick={() => handleDelete(method.id)}
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-colors"
                    aria-label={`Delete ${method.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}

            <li className="py-6 border-t border-gray-100 dark:border-gray-700">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Add Payment Method
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-full max-w-md mx-4">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">Add Payment Method</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
                  <div className="md:col-span-12">
                    <div className="text-start">
                      <label htmlFor="name" className="font-semibold text-gray-700 dark:text-gray-300">Your Name :</label>
                      <input 
                        name="name" 
                        id="name" 
                        type="text" 
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        required 
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="expiryMonth" className="font-medium text-gray-700 dark:text-gray-300">Month :</label>
                      <select 
                        id="expiryMonth" 
                        name="expiryMonth"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        value={formData.expiryMonth}
                        onChange={handleInputChange}
                      >
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="expiryYear" className="font-medium text-gray-700 dark:text-gray-300">Year :</label>
                      <select 
                        id="expiryYear" 
                        name="expiryYear"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        value={formData.expiryYear}
                        onChange={handleInputChange}
                      >
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="cardNumber" className="font-semibold text-gray-700 dark:text-gray-300">Card no. :</label>
                      <input 
                        name="cardNumber" 
                        id="cardNumber" 
                        type="text" 
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        required 
                        placeholder="Card number"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        maxLength={16}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="cvv" className="font-semibold text-gray-700 dark:text-gray-300">CVV :</label>
                      <input 
                        name="cvv" 
                        id="cvv" 
                        type="text" 
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        required 
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-12">
                    <div className="text-start">
                      <label htmlFor="cardType" className="font-medium text-gray-700 dark:text-gray-300">Card Type :</label>
                      <select 
                        id="cardType" 
                        name="cardType"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        value={formData.cardType}
                        onChange={handleInputChange}
                      >
                        <option value="Visa">Visa</option>
                        <option value="American Express">American Express</option>
                        <option value="Master Card">Master Card</option>
                        <option value="Discover">Discover</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <button 
                    type="submit" 
                    className="py-2 px-5 font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex-1"
                  >
                    Add Card
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="py-2 px-5 font-semibold tracking-wide align-middle duration-500 text-base text-center bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddPayment;