import React from 'react'

function FloatingContactCard() {
    // Theme color
    const themeColor = "#fb2c36";
    
    return (
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="floating-contact-card bg-white dark:bg-slate-800 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: themeColor }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Office</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                123 Travel Street, Suite 558<br />
                Houston, Texas 77002<br />
                United States
              </p>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: `${themeColor}15`, 
                  color: themeColor 
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Card 2 */}
            <div className="floating-contact-card bg-white dark:bg-slate-800 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: themeColor }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Working Hours</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM<br />
                Sunday: Closed
              </p>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: `${themeColor}15`, 
                  color: themeColor 
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Card 3 */}
            <div className="floating-contact-card bg-white dark:bg-slate-800 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: themeColor }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Email Support</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                General inquiries: hello@travosy.com<br />
                Support: support@travosy.com<br />
                Response within 24 hours
              </p>
              <a 
                href="mailto:hello@travosy.com" 
                className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: `${themeColor}15`, 
                  color: themeColor 
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
    )
}

export default FloatingContactCard