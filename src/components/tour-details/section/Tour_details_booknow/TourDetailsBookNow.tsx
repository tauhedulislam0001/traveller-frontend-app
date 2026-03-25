import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@redux/store";
import { useStoreBookingMutation } from "@redux/services/booking/api";
import toast from "react-hot-toast";

interface PricingOption {
    cost_type: string;
    type_label: string;
    person_count?: number | null;
    regular_amount: number;
    final_amount: number;
    formatted_regular: string;
    formatted_final: string;
    has_discount: boolean;
    discount_amount?: number | null;
    saved_amount?: number;
    saved_percent?: number;
    formatted_saved?: string | null;
    total_price?: number;
    formatted_total?: string;
}

interface Props {
    pricing?: PricingOption[];
    price?: string | null;
    duration?: string;
    tourId: number;
    tourTitle: string;
}

const TourDetailsBookNow: React.FC<Props> = ({ 
    pricing = [], 
    price, 
    duration, 
    tourId, 
    tourTitle 
}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isAuthenticated, customer } = useSelector((state: RootState) => state.auth);
    const [storeBooking, { isLoading }] = useStoreBookingMutation();
    
    const [isMounted, setIsMounted] = useState(false);
    const [selectedTourType, setSelectedTourType] = useState<string>('');
    const [selectedGroupSize, setSelectedGroupSize] = useState<number>(0);
    const [selectedPricing, setSelectedPricing] = useState<PricingOption | null>(null);
    const [adultCount, setAdultCount] = useState(1);
    const [customGroupSize, setCustomGroupSize] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [notes, setNotes] = useState('');
    const [manualInputValue, setManualInputValue] = useState('1');
    const [customManualInput, setCustomManualInput] = useState('1');
    const dateInputRef = useRef<HTMLInputElement>(null);

    // Group options from pricing
    const groupOptions = pricing.filter(p => p.cost_type === 'group_tour');
    const perPersonOption = pricing.find(p => p.cost_type === 'per_person');

    useEffect(() => {
        setIsMounted(true);
    }, [pricing]);

    // Handle tour type change
    const handleTourTypeChange = (type: string) => {
        setSelectedTourType(type);
        
        if (type === 'per_person' && perPersonOption) {
            setSelectedPricing(perPersonOption);
            setSelectedGroupSize(0);
        } else if (type === 'group_tour' && groupOptions.length > 0) {
            const firstGroup = groupOptions[0];
            setSelectedGroupSize(firstGroup.person_count || 0);
            setSelectedPricing(firstGroup);
        } else {
            setSelectedPricing(null);
            setSelectedGroupSize(0);
        }
    };

    // Handle group size change
    const handleGroupSizeChange = (personCount: number) => {
        setSelectedGroupSize(personCount);
        
        if (personCount === -1) {
            handleCustomGroupSizeChange(customGroupSize);
        } else {
            const selectedGroup = groupOptions.find(g => g.person_count === personCount);
            if (selectedGroup) {
                setSelectedPricing(selectedGroup);
            }
        }
    };

    // Handle custom group size change
    const handleCustomGroupSizeChange = (value: number) => {
        const newCount = Math.max(1, Math.min(500, value));
        setCustomGroupSize(newCount);
        setCustomManualInput(newCount.toString());
        
        if (groupOptions.length > 0) {
            const basePricing = groupOptions[0];
            const pricePerPerson = basePricing.final_amount;
            const totalPrice = pricePerPerson * newCount;
            
            setSelectedPricing({
                ...basePricing,
                person_count: newCount,
                total_price: totalPrice,
                formatted_total: '$' + totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            });
        }
    };

    const handleCustomManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomManualInput(value);
        const numValue = parseInt(value);
        if (!isNaN(numValue)) {
            handleCustomGroupSizeChange(numValue);
        }
    };

    // Handle adult count change
    const handleAdultCountChange = (value: number) => {
        const newCount = Math.max(1, Math.min(100, value));
        setAdultCount(newCount);
        setManualInputValue(newCount.toString());
    };

    const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setManualInputValue(value);
        const numValue = parseInt(value);
        if (!isNaN(numValue)) {
            handleAdultCountChange(numValue);
        }
    };

    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    // Calculate total amount
    const getTotalAmount = () => {
        if (!selectedPricing) return '0.00';
        
        if (selectedTourType === 'group_tour') {
            if (selectedGroupSize === -1) {
                return selectedPricing.formatted_total || '$0.00';
            } else if (selectedPricing.total_price) {
                return selectedPricing.formatted_total || '$0.00';
            }
        }
        
        const priceNum = selectedPricing.final_amount;
        return (adultCount * priceNum).toFixed(2);
    };

    // Get total amount as number
    const getTotalAmountNumber = () => {
        if (!selectedPricing) return 0;
        
        if (selectedTourType === 'group_tour') {
            if (selectedGroupSize === -1) {
                return selectedPricing.total_price || 0;
            } else if (selectedPricing.total_price) {
                return selectedPricing.total_price;
            }
        }
        
        return selectedPricing.final_amount * adultCount;
    };

    // Check if book button should be enabled
    const isBookButtonEnabled = () => {
        return selectedTourType !== '' && selectedPricing !== null && selectedDate !== '' && isAuthenticated;
    };

    // Handle booking submission using RTK Query
    const handleBookNow = async () => {
        if (!isAuthenticated) {
            toast.error('Please login to book this tour');
            router.push('/login');
            return;
        }

        if (!isBookButtonEnabled()) {
            toast.error('Please complete all required fields');
            return;
        }

        try {
            const result = await storeBooking({
                package_id: tourId,
                tour_start_date: selectedDate,
                number_of_guests: selectedTourType === 'per_person' ? adultCount : 
                                  (selectedGroupSize === -1 ? customGroupSize : selectedGroupSize),
                special_requests: notes,
            }).unwrap();

            if (result.success) {
                toast.success('Booking created successfully! A confirmation email has been sent.');
                
                // Redirect to booking confirmation or bookings page
                setTimeout(() => {
                     // Redirect to profile bookings page
                    router.push('/profile?tab=bookings');
                }, 2000);
            }
        } catch (error: any) {
            console.error('Booking error:', error);
            
            if (error?.data?.errors) {
                Object.values(error.data.errors).forEach((err: any) => {
                    toast.error(err[0]);
                });
            } else {
                toast.error(error?.data?.message || 'Failed to create booking');
            }
        }
    };

    if (!isMounted) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
            {/* Premium Header */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-custom-red via-red-500 to-custom-red opacity-90"></div>
                <div className="relative p-6 text-center">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold tracking-wider mb-2">
                        BOOK YOUR ADVENTURE
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">Book This Tour</h3>
                    <p className="text-white/80 text-sm">Secure your spot with 20% deposit</p>
                </div>
            </div>

            {/* Booking Form */}
            <div className="p-6 space-y-5">
                {/* Authentication Warning */}
                {!isAuthenticated && (
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div className="flex-1">
                                <p className="text-sm text-amber-700">Please login to book this tour</p>
                            </div>
                            <button 
                                onClick={() => router.push('/login')}
                                className="text-sm text-amber-700 font-semibold hover:text-amber-800"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}

                {/* Tour Type Selection */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Select Tour Type
                    </label>
                    <select
                        value={selectedTourType}
                        onChange={(e) => handleTourTypeChange(e.target.value)}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all cursor-pointer"
                        disabled={isLoading}
                    >
                        <option value="">Select Tour Type</option>
                        {perPersonOption && (
                            <option value="per_person">Per Person Tour</option>
                        )}
                        {groupOptions.length > 0 && (
                            <option value="group_tour">Group Tour</option>
                        )}
                    </select>
                </div>

                {/* Group Size Selection */}
                {selectedTourType === 'group_tour' && groupOptions.length > 0 && (
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                            Group Size
                        </label>
                        <select
                            value={selectedGroupSize}
                            onChange={(e) => handleGroupSizeChange(Number(e.target.value))}
                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all cursor-pointer"
                            disabled={isLoading}
                        >
                            {groupOptions.map((option) => (
                                <option key={option.person_count} value={option.person_count || 0}>
                                    {option.person_count} Persons
                                    {option.has_discount && ` (Save ${option.formatted_saved})`}
                                </option>
                            ))}
                            <option value="-1">Custom</option>
                        </select>
                        
                        {selectedGroupSize === -1 && (
                            <div className="mt-3">
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <button 
                                                onClick={() => handleCustomGroupSizeChange(customGroupSize - 1)} 
                                                className="w-10 h-10 bg-white rounded-xl border border-gray-200 hover:border-custom-red hover:text-custom-red transition-all flex items-center justify-center shadow-sm"
                                                disabled={customGroupSize <= 1 || isLoading}
                                            >
                                                <span className="text-xl font-medium">−</span>
                                            </button>
                                            <input
                                                type="text"
                                                value={customManualInput}
                                                onChange={handleCustomManualInput}
                                                className="w-20 text-center font-semibold text-lg text-gray-900 bg-transparent focus:outline-none"
                                                disabled={isLoading}
                                            />
                                            <button 
                                                onClick={() => handleCustomGroupSizeChange(customGroupSize + 1)} 
                                                className="w-10 h-10 bg-white rounded-xl border border-gray-200 hover:border-custom-red hover:text-custom-red transition-all flex items-center justify-center shadow-sm"
                                                disabled={isLoading}
                                            >
                                                <span className="text-xl font-medium">+</span>
                                            </button>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            Total: ${(selectedPricing?.final_amount || 0 * customGroupSize).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Price Display */}
                {selectedTourType !== '' && selectedPricing && (
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Price per person:</span>
                            <div className="text-right">
                                {selectedPricing.has_discount ? (
                                    <div>
                                        <span className="text-sm line-through text-gray-400 mr-2">
                                            {selectedPricing.formatted_regular}
                                        </span>
                                        <span className="text-xl font-bold text-custom-red">
                                            {selectedPricing.formatted_final}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-xl font-bold text-custom-red">
                                        {selectedPricing.formatted_final}
                                    </span>
                                )}
                            </div>
                        </div>
                        {selectedPricing.has_discount && (
                            <div className="mt-2 text-sm text-green-600">
                                You save: {selectedPricing.formatted_saved} ({selectedPricing.saved_percent}% off)
                            </div>
                        )}
                    </div>
                )}

                {/* Adult Counter */}
                {selectedTourType === 'per_person' && (
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                            Adults (Age 12+)
                        </label>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => handleAdultCountChange(adultCount - 1)} 
                                        className="w-10 h-10 bg-white rounded-xl border border-gray-200 hover:border-custom-red hover:text-custom-red transition-all flex items-center justify-center shadow-sm"
                                        disabled={adultCount <= 1 || isLoading}
                                    >
                                        <span className="text-xl font-medium">−</span>
                                    </button>
                                    <input
                                        type="text"
                                        value={manualInputValue}
                                        onChange={handleManualInput}
                                        className="w-20 text-center font-semibold text-lg text-gray-900 bg-transparent focus:outline-none"
                                        disabled={isLoading}
                                    />
                                    <button 
                                        onClick={() => handleAdultCountChange(adultCount + 1)} 
                                        className="w-10 h-10 bg-white rounded-xl border border-gray-200 hover:border-custom-red hover:text-custom-red transition-all flex items-center justify-center shadow-sm"
                                        disabled={isLoading}
                                    >
                                        <span className="text-xl font-medium">+</span>
                                    </button>
                                </div>
                                <span className="text-sm text-gray-500">
                                    Total: ${(selectedPricing?.final_amount || 0 * adultCount).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Date Selection */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Travel Date
                    </label>
                    <input
                        ref={dateInputRef}
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all cursor-pointer"
                        min={new Date().toISOString().split('T')[0]}
                        disabled={isLoading}
                    />
                </div>

                {/* Notes Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                        Special Requests / Notes
                    </label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-custom-red focus:ring-2 focus:ring-custom-red/20 transition-all resize-none"
                        placeholder="Any special requests or notes for your tour..."
                        disabled={isLoading}
                    />
                </div>

                {/* Total Amount */}
                {selectedTourType !== '' && selectedPricing && (
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-base font-semibold text-gray-900">Total Amount</span>
                            <span className="text-2xl font-bold text-custom-red">
                                ${getTotalAmount()}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Includes all taxes & fees</p>
                    </div>
                )}

                {/* Book Now Button */}
                <button 
                    onClick={handleBookNow}
                    disabled={!isBookButtonEnabled() || isLoading}
                    className={`w-full py-4 bg-gradient-to-r from-custom-red to-red-600 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-custom-red/20 flex items-center justify-center gap-2 group ${
                        (!isBookButtonEnabled() || isLoading) ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                    }`}
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <span>Book Now{selectedPricing ? ` - $${getTotalAmount()}` : ''}</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>
                
                {/* Validation Messages */}
                {!isAuthenticated && (
                    <p className="text-xs text-amber-600 text-center">
                        Please login to book this tour
                    </p>
                )}
                {isAuthenticated && !selectedTourType && (
                    <p className="text-xs text-amber-600 text-center">
                        Please select a tour type to continue
                    </p>
                )}
                {isAuthenticated && selectedTourType && !selectedDate && (
                    <p className="text-xs text-amber-600 text-center">
                        Please select a travel date to continue
                    </p>
                )}

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Secure Payment</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Best Price</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span>Free Cancellation</span>
                    </div>
                </div>
            </div>

            {/* Need Help Section */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-custom-red/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">Need help booking?</h5>
                        <p className="text-sm text-gray-500 mt-0.5">Our travel experts are here 24/7</p>
                        <button className="mt-2 text-custom-red hover:text-red-600 font-medium text-sm inline-flex items-center gap-1">
                            Contact Support
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsBookNow;