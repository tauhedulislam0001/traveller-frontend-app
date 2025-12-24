import Link from 'next/link'
import React from 'react'

function HeroBlogDetails() {
    return (
        <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover min-h-[400px]">
        {/* Background Image Container with Dark Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/bg/cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          
          {/* Dark Gradient Overlay - Enhanced for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
          
          {/* Additional Dark Overlay for Center Focus */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Subtle Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.8)_100%)]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white drop-shadow-lg">
              Traveller Visiting Ice Cave With Amazing Eye-catching Scenes
            </h3>

            <ul className="list-none mt-6">
              <li className="inline-block mx-5">
                <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <span className="text-white/90 block text-sm">Author :</span>
                  <span className="text-white font-semibold block">Travosy</span>
                </div>
              </li>
              <li className="inline-block mx-5">
                <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <span className="text-white/90 block text-sm">Date :</span>
                  <span className="text-white font-semibold block">8th February 2024</span>
                </div>
              </li>
              <li className="inline-block mx-5">
                <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <span className="text-white/90 block text-sm">Time :</span>
                  <span className="text-white font-semibold block">8 Min Read</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <div className="inline-flex items-center backdrop-blur-sm bg-black/40 px-6 py-3 rounded-full border border-white/10">
            <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="text-white/80 hover:text-white cursor-pointer font-medium transition-colors duration-300">
                  <span className="inline-flex items-center">
                    Travosy
                  </span>
                </Link>
              </li>
              <li className="text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="font-bold text-white bg-white/10 px-4 py-1 rounded-full">
                Blog Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default HeroBlogDetails