import React, { useState, useEffect } from "react";

function TourDetailsQA() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Tour Details...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="mt-6">
            <h5 className="text-lg font-semibold">Questions & Answers:</h5>
            
            <div className="mt-6 space-y-4">
                {[
                { id: 1, question: "How does it work?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                { id: 2, question: "Do I need a designer to use Travosy?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                { id: 3, question: "What do I need to do to start selling?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." },
                { id: 4, question: "What happens when I receive an order?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." }
                ].map((faq) => (
                <div key={faq.id} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden border border-slate-200 dark:border-gray-800">
                    <button
                    type="button"
                    className="flex justify-between items-center p-5 w-full font-medium text-start bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => toggleAccordion(faq.id)}
                    >
                    <span>{faq.question}</span>
                    <svg
                        className={`size-4 shrink-0 transform transition-transform ${activeAccordion === faq.id ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>
                    {activeAccordion === faq.id && (
                    <div className="p-5 border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-slate-900">
                        <p className="text-slate-400 dark:text-gray-400">{faq.answer}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    )
}

export default TourDetailsQA