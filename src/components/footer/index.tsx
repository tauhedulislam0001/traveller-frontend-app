import React, { useEffect } from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll event for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('hidden');
        } else {
          backToTopButton.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <footer className="footer bg-slate-900 relative text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                  <div className="lg:col-span-3 md:col-span-12">
                    <a href="#" className="text-[22px] focus:outline-none">
                      <img src="assets/images/logo-light.png" alt="" />
                    </a>
                    <p className="mt-6 text-gray-300">
                      Planning for a trip? We will organize your trip with the best places and within best budget!
                    </p>
                    <ul className="list-none mt-6">
                      <li className="inline">
                        <a href="https://1.envato.market/travosy" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="shopping-cart" className="size-4 align-middle" title="Buy Now"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="https://dribbble.com/shreethemes" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="dribbble" className="size-4 align-middle" title="dribbble"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="http://linkedin.com/company/shreethemes" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="linkedin" className="size-4 align-middle" title="Linkedin"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="https://www.facebook.com/shreethemes" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="facebook" className="size-4 align-middle" title="facebook"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="https://www.instagram.com/shreethemes/" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="instagram" className="size-4 align-middle" title="instagram"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="https://twitter.com/shreethemes" target="_blank" rel="noopener noreferrer" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="twitter" className="size-4 align-middle" title="twitter"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a href="mailto:support@shreethemes.in" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300">
                          <i data-feather="mail" className="size-4 align-middle" title="email"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <div className="lg:ms-8">
                      <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                      <h5 className="tracking-[1px] text-gray-100 mt-6">Travosy Tour & Travels</h5>

                      <div className="flex mt-4">
                        <i data-feather="map-pin" className="size-4 text-red-500 me-2 mt-1"></i>
                        <div className="">
                          <h6 className="text-gray-300">
                            C/54 Northwest Freeway, <br /> Suite 558, <br /> Houston, USA 485
                          </h6>
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <i data-feather="mail" className="size-4 text-red-500 me-2 mt-1"></i>
                        <div className="">
                          <a href="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">
                            contact@example.com
                          </a>
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <i data-feather="phone" className="size-4 text-red-500 me-2 mt-1"></i>
                        <div className="">
                          <a href="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">
                            +152 534-468-854
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <div className="lg:ms-8">
                      <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                      <ul className="list-none footer-list mt-6">
                        <li>
                          <a href="aboutus.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> About us
                          </a>
                        </li>
                        <li className="mt-[10px]">
                          <a href="services.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> Services
                          </a>
                        </li>
                        <li className="mt-[10px]">
                          <a href="team.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> Team
                          </a>
                        </li>
                        <li className="mt-[10px]">
                          <a href="pricing.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> Pricing
                          </a>
                        </li>
                        <li className="mt-[10px]">
                          <a href="blogs.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> Blog
                          </a>
                        </li>
                        <li className="mt-[10px]">
                          <a href="login.html" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                            <i className="mdi mdi-chevron-right"></i> Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1">
                        <div className="my-3">
                          <label className="form-label">
                            Write your email <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <i data-feather="mail" className="size-4 absolute top-3 start-4"></i>
                            <input
                              type="email"
                              className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none"
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800">
          <div className="container relative text-center">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <p className="mb-0">
                  © {currentYear} Travosy. Design with <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <a href="https://shreethemes.in/" target="_blank" rel="noopener noreferrer" className="text-reset">
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#"
        onClick={handleBackToTop}
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-md z-10 bottom-5 end-5 size-8 text-center bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white justify-center items-center transition-all duration-300"
      >
        <i className="mdi mdi-arrow-up"></i>
      </a>
    </div>
  );
};