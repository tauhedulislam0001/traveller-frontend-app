import ContactHeroSection from "@components/contact/contact_hero_section/ContactHeroSection";
import FaqSection from "@components/contact/faq_section/FaqSection";
import FloatingContactCard from "@components/contact/floating_contact_card/FloatingContactCard";
import SendMessage from "@components/contact/send_message/SendMessage";
import React, { useState, useEffect } from "react";

const Contacts: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  
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

  return (
    <div className="font-sans">
        {/* Modern Hero Section */}
        <ContactHeroSection />

      {/* Main Content */}
      <div className="relative -mt-10">
        {/* Floating Contact Cards */}
        <FloatingContactCard />

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
              
                <SendMessage />
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
          <FaqSection />
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

export default Contacts;
