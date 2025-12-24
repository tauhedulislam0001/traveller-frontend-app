import React from 'react'

function SendMessage() {
    // Theme color
    const themeColor = "#fb2c36";
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-form-card rounded-2xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Your Name *
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-[#fb2c36]/30 focus:border-[#fb2c36] outline-none transition-all duration-300 placeholder:text-slate-400"
                            placeholder="John Doe"
                        />
                        </div>

                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Email Address *
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-[#fb2c36]/30 focus:border-[#fb2c36] outline-none transition-all duration-300 placeholder:text-slate-400"
                            placeholder="john@example.com"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Subject *
                        </label>
                        <input 
                        type="text" 
                        id="subject" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-[#fb2c36]/30 focus:border-[#fb2c36] outline-none transition-all duration-300 placeholder:text-slate-400"
                        placeholder="How can we help you?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Message *
                        </label>
                        <textarea 
                        id="message" 
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:ring-2 focus:ring-[#fb2c36]/30 focus:border-[#fb2c36] outline-none transition-all duration-300 placeholder:text-slate-400 resize-none"
                        placeholder="Tell us about your travel plans..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                        style={{ backgroundColor: themeColor }}
                    >
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>
                </div>

                {/* Info Sidebar */}
                <div className="space-y-8">
                    {/* Quick Info */}
                    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Why Choose Us?
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: `${themeColor}15` }}>
                                <svg className="w-6 h-6" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Fast Response</h4>
                                <p className="text-slate-600 dark:text-slate-400">Get answers within 24 hours</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: `${themeColor}15` }}>
                                <svg className="w-6 h-6" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Expert Guidance</h4>
                                <p className="text-slate-600 dark:text-slate-400">Travel specialists with 10+ years experience</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: `${themeColor}15` }}>
                                <svg className="w-6 h-6" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Secure Booking</h4>
                                <p className="text-slate-600 dark:text-slate-400">Your information is safe with us</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Connect With Us
                        </h3>
                        
                        <div className="flex flex-wrap gap-4">
                            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                            <a 
                                key={social}
                                href="#" 
                                className="flex-1 min-w-[120px] px-4 py-3 rounded-xl text-center font-medium transition-all duration-300 hover:shadow-md"
                                style={{ 
                                backgroundColor: `${themeColor}10`, 
                                color: themeColor 
                                }}
                            >
                                {social}
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SendMessage