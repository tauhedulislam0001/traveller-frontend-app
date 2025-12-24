import Link from 'next/link'
import React from 'react'

function BlogHeroSection() {
  return (
    <section className="relative table w-full items-center py-36 bg-top bg-no-repeat bg-cover min-h-[400px]">
        {/* Background Image Container */}
        <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('/assets/images/bg/cta.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        
        <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">
            Blogs / News
            </h3>
        </div>
        </div>
        
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <Link href="/">Travosy</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">
            Blogs
            </li>
        </ul>
        </div>
    </section>
  )
}

export default BlogHeroSection