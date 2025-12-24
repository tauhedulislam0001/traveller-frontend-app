import TourDetailsBookNow from "@components/tour-details/section/Tour_details_booknow/TourDetailsBookNow";
import TourDetailComments from "@components/tour-details/section/tour_details_comments/TourDetailComments";
import TourDetailsQA from "@components/tour-details/section/tour_details_question_answer/TourDetailsQA";
import TourDetailsHeroSection from "@components/tour-details/section/tour_hero_section/TourDetailsHeroSection";
import React, { useState, useEffect } from "react";

export const TourDetail: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

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
    <div className="font-sans">
      {/* Hero Section */}
      <TourDetailsHeroSection />

      {/* Tour Detail Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8 md:col-span-7">
              {/* Image Gallery */}
              <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-8 col-span-7">
                  <div className="group relative overflow-hidden rounded shadow-sm dark:shadow-gray-800">
                    <img 
                      src="/assets/images/listing/1.jpg" 
                      className="w-full lg:h-60 md:h-44 h-48 object-cover" 
                      alt="Tour Gallery 1"
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <button className="inline-flex justify-center items-center size-9 bg-custom-red text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 col-span-5">
                  <div className="group relative overflow-hidden rounded shadow-sm dark:shadow-gray-800">
                    <img 
                      src="/assets/images/listing/2.jpg" 
                      className="w-full lg:h-60 md:h-44 h-48 object-cover" 
                      alt="Tour Gallery 2"
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <button className="inline-flex justify-center items-center size-9 bg-custom-red text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 col-span-5">
                  <div className="group relative overflow-hidden rounded shadow-sm dark:shadow-gray-800">
                    <img 
                      src="/assets/images/listing/3.jpg" 
                      className="w-full lg:h-60 md:h-44 h-48 object-cover" 
                      alt="Tour Gallery 3"
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <button className="inline-flex justify-center items-center size-9 bg-custom-red text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 col-span-7">
                  <div className="group relative overflow-hidden rounded shadow-sm dark:shadow-gray-800">
                    <img 
                      src="/assets/images/listing/4.jpg" 
                      className="w-full lg:h-60 md:h-44 h-48 object-cover" 
                      alt="Tour Gallery 4"
                    />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                      <button className="inline-flex justify-center items-center size-9 bg-custom-red text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Title and Info */}
              <h5 className="text-2xl font-semibold mt-5">New Zealand's South Island brims with majestic</h5>
              <p className="flex items-center text-slate-400 font-medium mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                New Zealand
              </p>

              {/* Tour Features */}
              <ul className="list-none mt-5">
                <li className="inline-flex items-center me-5 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[1.5] text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ms-3">
                    <p className="font-medium">Duration</p>
                    <span className="text-slate-400 font-medium text-sm">2 day</span>
                  </div>
                </li>

                <li className="inline-flex items-center me-5 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[1.5] text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="ms-3">
                    <p className="font-medium">Type</p>
                    <span className="text-slate-400 font-medium text-sm">Adventure</span>
                  </div>
                </li>

                <li className="inline-flex items-center me-5 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[1.5] text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a5.5 5.5 0 01-5.5 5.5" />
                  </svg>
                  <div className="ms-3">
                    <p className="font-medium">Group Size:</p>
                    <span className="text-slate-400 font-medium text-sm">50 Peoples</span>
                  </div>
                </li>

                <li className="inline-flex items-center me-5 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[1.5] text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div className="ms-3">
                    <p className="font-medium">Languages</p>
                    <span className="text-slate-400 font-medium text-sm">English</span>
                  </div>
                </li>

                <li className="inline-flex items-center me-5 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[1.5] text-custom-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ms-3">
                    <p className="font-medium">$50 / Person</p>
                    <span className="text-slate-400 font-medium text-sm">1 Day</span>
                  </div>
                </li>
              </ul>

              {/* Tour Description */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold">Tour Descriptions:</h5>
                <p className="text-slate-400 mt-6">
                  The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.
                </p>
                <p className="text-slate-400 mt-3">
                  The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.
                </p>
              </div>

              {/* FAQ Section */}
              <TourDetailsQA />

              {/* Comment Form */}
              <TourDetailComments />
            </div>

            {/* Sidebar Booking Form */}
            
                
                <TourDetailsBookNow/>
                
                </div>
            </div>
        </section>
    </div>
  );
};

export default TourDetail;
