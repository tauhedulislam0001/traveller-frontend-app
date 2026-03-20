import React from 'react'
import Link from "next/link";

interface TourDetailsHeroSectionProps {
    title?: string;
    packageType?: string;
}

function TourDetailsHeroSection({ title, packageType }: TourDetailsHeroSectionProps) {
    return (
        <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover">
            {/* Background Image - Full visibility, no overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/bg/cta.jpg')" }}
            />
            
            {/* Content */}
            <div className="container relative z-10">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    {title && (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-normal tracking-wider font-bold text-white mb-4 drop-shadow-lg">
                            {title}
                        </h1>
                    )}
                    {packageType && (
                        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-4 drop-shadow-md">
                            {packageType} Tour Package
                        </p>
                    )}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl leading-normal tracking-wider font-semibold text-white mt-4 drop-shadow-lg">
                        Journey through the heart of Bangladesh
                    </h3>
                </div>
            </div>
            
            {/* Breadcrumb */}
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white hover:text-white/80">
                        <Link href="/">Traveller BD</Link>
                    </li>
                    <li className="inline-block text-base text-white mx-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    {packageType && (
                        <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto mb-4 drop-shadow-md">
                            {packageType} Tour Package
                        </p>
                    )}
                </ul>
            </div>
        </section>
    ) 
}

export default TourDetailsHeroSection;