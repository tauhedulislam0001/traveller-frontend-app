import React from 'react'

function NewsletterBlog() {

    // Theme color
    const themeColor = "#fb2c36";
    
    return (
        <div className="rounded-2xl shadow-lg p-6 border" style={{ backgroundColor: themeColor, borderColor: '#d9232d' }}>
            <h3 className="text-xl font-bold text-white mb-4">
                Travel Newsletter
            </h3>
            <p className="text-white/90 mb-6">
                Get weekly travel inspiration and exclusive offers straight to your inbox.
            </p>
            <div>
                <input 
                type="email" 
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="Your email address"
                />
                <button className="w-full mt-4 bg-white text-[#fb2c36] hover:bg-gray-100 font-semibold py-3 rounded-xl transition-colors duration-300">
                Subscribe
                </button>
            </div>
        </div>
    )
}

export default NewsletterBlog