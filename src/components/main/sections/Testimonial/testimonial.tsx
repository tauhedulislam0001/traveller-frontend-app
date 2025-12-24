import React, { useRef, useEffect, useState } from 'react'
import Slider from "react-slick";

function Testimonial() {
    const [isMounted, setIsMounted] = useState(false);
    const sliderRef2 = useRef<Slider>(null);
    
    useEffect(() => {
        setIsMounted(true);
    });
    
    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Testimonial...</p>
            </div>
        </div>
        );
    }

    const sliderSettings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            }
        },
        {
            breakpoint: 640,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            centerPadding: '40px',
            }
        }
        ]
    };

    const testimonials = [
        { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Calvin Carlo", role: "Product Manager", quote: "This travel agency made our vacation absolutely perfect! Everything was well-organized and exceeded our expectations." },
        { id: 2, img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Christa Smith", role: "Travel Blogger", quote: "Exceptional service! They handled all the details so we could just relax and enjoy our trip." },
        { id: 3, img: "https://randomuser.me/api/portraits/women/68.jpg", name: "Jemina Clone", role: "Marketing Director", quote: "Professional, reliable, and great value. Will definitely book with them again for our next adventure!" },
        { id: 4, img: "https://randomuser.me/api/portraits/men/75.jpg", name: "Michael Vodka", role: "Software Engineer", quote: "The attention to detail was impressive. Every transfer was on time, every hotel was perfect." },
        { id: 5, img: "https://randomuser.me/api/portraits/men/55.jpg", name: "Cristino Murfi", role: "Business Owner", quote: "They created a customized itinerary that perfectly matched our interests and budget. Highly recommended!" },
        { id: 6, img: "https://randomuser.me/api/portraits/men/65.jpg", name: "John Smith", role: "Photographer", quote: "As a frequent traveler, I can say this is one of the best agencies I've worked with. Seamless experience!" },
    ];
    
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 pb-12 text-center">
                    <h3 className="mb-4 md:text-4xl text-3xl font-bold text-slate-900 dark:text-white">What Our Travelers Say</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Hear from our satisfied travelers who experienced unforgettable journeys with Travosy Travel Agency.</p>
                </div>

                <div className="relative mt-8">
                    <Slider ref={sliderRef2} {...sliderSettings2}>
                        {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-4 py-4 h-full">
                            {/* FIXED: Added h-full to outer div */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 p-8 relative border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                                {/* Decorative top accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-red to-amber-500 rounded-t-2xl"></div>
                                
                                <div className="flex-grow">
                                    {/* Quote icon */}
                                    <div className="text-custom-red/20 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9z"/>
                                        </svg>
                                    </div>
                                    
                                    {/* FIXED: Controlled height for quote text */}
                                    <div className="h-40 mb-6 overflow-hidden">
                                        <p className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed h-full">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                    
                                    {/* Ratings */}
                                    <div className="flex items-center mb-6">
                                        <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        </div>
                                        <span className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-400">5.0</span>
                                    </div>
                                </div>
                                
                                {/* User info */}
                                <div className="flex items-center pt-4 border-t border-gray-100 dark:border-slate-700">
                                    <img 
                                        src={testimonial.img} 
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-custom-red/30 shadow-md" 
                                        alt={testimonial.name}
                                        loading="lazy"
                                    />
                                    <div>
                                        <h6 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h6>
                                        <span className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
                                            {testimonial.role}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Add this CSS for slider dots and equal height */}
            <style jsx global>{`
                .slick-list {
                    padding: 20px 0 !important;
                }
                .slick-track {
                    display: flex !important;
                    align-items: stretch !important;
                }
                .slick-slide {
                    height: auto !important;
                }
                .slick-slide > div {
                    height: 100%;
                }
                .slick-dots {
                    bottom: -40px !important;
                }
                .slick-dots li button:before {
                    font-size: 10px !important;
                    color: #ef4444 !important;
                    opacity: 0.5;
                }
                .slick-dots li.slick-active button:before {
                    color: #ef4444 !important;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

export default Testimonial