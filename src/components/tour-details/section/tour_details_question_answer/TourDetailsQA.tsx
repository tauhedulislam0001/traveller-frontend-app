import React, { useState } from 'react';

interface Props {
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

const TourDetailsQA: React.FC<Props> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Function to render HTML content safely
    const renderHtml = (html: string) => {
        return { __html: html };
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-6 h-6 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Frequently Asked Questions
                </h3>
                <p className="text-gray-500 text-sm mt-1">Everything you need to know about this tour</p>
            </div>

            <div className="divide-y divide-gray-100">
                {faqs.map((faq, index) => (
                    <div key={index} className="p-6">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-start justify-between gap-4 text-left group"
                        >
                            <div className="flex-1">
                                <h4 className={`text-base font-semibold transition-colors ${
                                    openIndex === index ? 'text-custom-red' : 'text-gray-900 group-hover:text-custom-red'
                                }`}>
                                    {faq.question}
                                </h4>
                            </div>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                openIndex === index 
                                    ? 'bg-custom-red text-white rotate-180' 
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-custom-red/10 group-hover:text-custom-red'
                            }`}>
                                <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        {openIndex === index && (
                            <div className="mt-4 pl-4 border-l-4 border-custom-red/30 animate-fadeIn">
                                <div 
                                    className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
                                    dangerouslySetInnerHTML={renderHtml(faq.answer)}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Still have questions? */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-custom-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-900">Still have questions?</h5>
                        <p className="text-sm text-gray-500 mt-1">Can't find the answer you're looking for? Please chat with our team.</p>
                        <button className="mt-3 text-custom-red hover:text-red-600 font-medium text-sm inline-flex items-center gap-2">
                            Contact Us
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

export default TourDetailsQA;