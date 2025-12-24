import React from 'react'

function ContactHeroSection() {
    return (
        <section className="relative pt-32 pb-20 contact-hero overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 translate-x-1/3 translate-y-1/3"></div>
            </div>
            
            <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 border border-white/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch With Us
                </h1>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Have questions or ready to plan your next adventure? Our travel experts are here to help you create unforgettable experiences.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    </div>
                    <div className="text-left">
                    <div className="text-sm opacity-80">Call Us</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                    </div>
                </div>
                
                <div className="flex items-center text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    </div>
                    <div className="text-left">
                    <div className="text-sm opacity-80">Email Us</div>
                    <div className="font-semibold">hello@travosy.com</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ContactHeroSection