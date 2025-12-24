import React, { useState, useEffect } from "react";


function FaqSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const themeColor = "#fb2c36";

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const faqItems = [
        {
        question: "How quickly will I receive a response?",
        answer: "We typically respond within 24 hours during business days. For urgent matters, please call our support line."
        },
        {
        question: "What information should I provide in my inquiry?",
        answer: "Include your travel dates, destination preferences, number of travelers, budget, and specific requirements."
        },
        {
        question: "Do you offer custom travel packages?",
        answer: "Yes! We specialize in creating personalized travel experiences tailored to your preferences and budget."
        },
        {
        question: "What are your business hours?",
        answer: "Monday to Friday: 9:00 AM to 6:00 PM EST. We monitor emails over weekends for urgent inquiries."
        }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Find answers to common questions about our services
                </p>
                </div>
                
                <div className="space-y-4">
                {faqItems.map((faq, index) => (
                    <div 
                    key={index} 
                    className="accordion-item bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
                    >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white text-lg pr-4">
                        {faq.question}
                        </span>
                        <svg 
                        className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${openAccordion === index ? 'transform rotate-180' : ''}`}
                        style={{ color: themeColor }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    <div 
                        className={`px-6 overflow-hidden transition-all duration-300 ${
                        openAccordion === index 
                            ? 'max-h-48 pb-6 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection