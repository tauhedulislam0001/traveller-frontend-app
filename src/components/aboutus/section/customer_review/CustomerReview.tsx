import React, { useState, useEffect, useRef } from "react";

function CustomerReview() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonialContainerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        { 
        id: 1, 
        name: "Calvin Carlo", 
        role: "Manager", 
        image: "/assets/images/client/01.jpg",
        quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
        rating: 5
        },

        { 
        id: 2, 
        name: "Christa Smith", 
        role: "Manager", 
        image: "/assets/images/client/02.jpg",
        quote: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        rating: 5
        },

        { 
        id: 3, 
        name: "Jemina CLone", 
        role: "Manager", 
        image: "/assets/images/client/03.jpg",
        quote: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
        rating: 5
        },

        { 
        id: 4, 
        name: "Smith Vodka", 
        role: "Manager", 
        image: "/assets/images/client/04.jpg",
        quote: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
        rating: 5
        },

        { 
        id: 5, 
        name: "Cristino Murfi", 
        role: "Manager", 
        image: "/assets/images/client/05.jpg",
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        rating: 5
        },

        { 
        id: 6, 
        name: "Cristino Murfi", 
        role: "Manager", 
        image: "/assets/images/client/06.jpg",
        quote: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        rating: 5
        },
    ];

  // Group testimonials for carousel (3 per slide)
    const testimonialSlides = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        testimonialSlides.push(testimonials.slice(i, i + 3));
    }

    useEffect(() => {
        setIsMounted(true);
        
        // Auto-rotate testimonials only
        const testimonialInterval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonialSlides.length);
        }, 4000);

        return () => {
        clearInterval(testimonialInterval);
        };
    }, [testimonialSlides.length]);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonialSlides.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length);
    };

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading customer review...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Customers Say</h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                Hear from our satisfied customers about their amazing travel experiences with Travosy.
                </p>
            </div>

            <div className="grid grid-cols-1 mt-6">
                <div className="relative">
                {/* Testimonial Carousel Container - Made wider */}
                <div className="overflow-hidden">
                    <div 
                    ref={testimonialContainerRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                    >
                    {testimonialSlides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                        {/* Increased max-w to 7xl for wider layout */}
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                            {slide.map((testimonial) => (
                                <div key={testimonial.id} className="group">
                                {/* Testimonial Card with Border */}
                                <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 left-8">
                                    <div className="bg-red-500 text-white p-3 rounded-xl shadow-lg">
                                        <i className="mdi mdi-format-quote-open text-2xl"></i>
                                    </div>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        </span>
                                    ))}
                                    </div>

                                    {/* Quote Text - Made larger */}
                                    <p className="text-slate-600 dark:text-slate-300 italic text-lg mb-8 leading-relaxed line-clamp-4">
                                    "{testimonial.quote}"
                                    </p>

                                    {/* Customer Info */}
                                    <div className="flex items-center pt-6 border-t border-gray-100 dark:border-slate-700">
                                    <div className="relative">
                                        <img 
                                        src={testimonial.image} 
                                        className="size-16 rounded-full border-4 border-white dark:border-slate-800 shadow-md" 
                                        alt={testimonial.name}
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-red-500 text-white p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h6 className="font-bold text-lg text-gray-800 dark:text-white">{testimonial.name}</h6>
                                        <span className="text-red-500 font-medium">{testimonial.role}</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Navigation Arrows - Adjusted for wider layout */}
                <button 
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-slate-800 text-red-500 p-4 rounded-full shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 z-10 hover:scale-110 border border-gray-200 dark:border-slate-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-slate-800 text-red-500 p-4 rounded-full shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 z-10 hover:scale-110 border border-gray-200 dark:border-slate-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-12 space-x-3">
                    {testimonialSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                        activeTestimonial === index 
                            ? 'bg-red-500 w-10 border-red-600' 
                            : 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500 hover:bg-red-400'
                        }`}
                    />
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview