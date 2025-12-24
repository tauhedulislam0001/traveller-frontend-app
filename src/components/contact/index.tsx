import React, { useState, useEffect } from "react";

export const Contact: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  
  // Theme color
  const themeColor = "#fb2c36";

  useEffect(() => {
    setIsMounted(true);
    
    // Add CSS to make navbar text black
    const style = document.createElement('style');
    style.textContent = `
      /* Make navbar text black for contact page */
      nav.is-sticky .navigation-menu a {
        color: #1e293b !important; /* slate-800 */
      }
      
      nav.is-sticky .navigation-menu a:hover {
        color: #fb2c36 !important;
      }
      
      nav.is-sticky .logo img:not(.dark:inline-block) {
        filter: brightness(0) !important;
      }
      
      /* Contact page specific styles */
      .contact-hero {
        background: linear-gradient(135deg, ${themeColor} 0%, #d9232d 100%);
      }
      
      .floating-contact-card {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        border-top: 4px solid ${themeColor};
      }
      
      .contact-form-card {
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      }
      
      .dark .contact-form-card {
        background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
      }
      
      .accordion-item {
        transition: all 0.3s ease;
      }
      
      .accordion-item:hover {
        transform: translateX(5px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqItems = [
    {
      question: "How quickly will I receive a response?",
      answer: "We typically respond within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "What information should I provide in my inquiry?",
      answer: "Include your travel dates, destination preferences, number of travelers, budget, and specific requirements."
    },
    {
      question: "Do you offer custom travel packages?",
      answer: "Yes! We specialize in creating personalized travel experiences tailored to your preferences and budget."
    },
    {
      question: "What are your business hours?",
      answer: "Monday to Friday: 9:00 AM to 6:00 PM EST. We monitor emails over weekends for urgent inquiries."
    }
  ];

  return (
    <div className="font-sans">
      {/* Modern Hero Section */}
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

      {/* Main Content */}
      <div className="relative -mt-10">
        {/* Floating Contact Cards */}
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

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                  Fill out the form below and our travel experts will get back to you within 24 hours.
                </p>
              </div>
              
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
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Visit Our Office
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        123 Travel Street, Houston, Texas 77002
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <a 
                        href="#" 
                        className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: themeColor, color: 'white' }}
                      >
                        Get Directions
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" 
                      className="w-full h-[400px] border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Find answers to common questions about our services
                </p>
              </div>
              
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div 
                    key={index} 
                    className="accordion-item bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white text-lg pr-4">
                        {faq.question}
                      </span>
                      <svg 
                        className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${openAccordion === index ? 'transform rotate-180' : ''}`}
                        style={{ color: themeColor }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openAccordion === index 
                          ? 'max-h-48 pb-6 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Still have questions? */}
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center p-10 bg-gradient-to-r from-[#fb2c36]/10 to-[#fb2c36]/5 rounded-2xl border border-[#fb2c36]/20 max-w-md">
                  <svg className="w-14 h-14 mb-5" style={{ color: themeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Still have questions?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <a 
                    href="mailto:support@travosy.com" 
                    className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: themeColor }}
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Travel Tips
              </h3>
              <p className="text-slate-300 mb-8">
                Subscribe to our newsletter for the latest travel deals, tips, and destination guides.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-grow px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: themeColor }}
                >
                  Subscribe
                </button>
              </form>
              <p className="text-slate-400 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};