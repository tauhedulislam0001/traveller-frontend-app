import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SecondLandingPage: React.FC = () => {
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  // Slider settings for "Top Destinations" (5 items visible)
  const sliderSettings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Slider settings for "What Our Users Say" (3 items visible)
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const destinations = [
    { id: 1, img: "/assets/images/listing/1.jpg", title: "Rome, Italy", hotels: "3 Hotels" },
    { id: 2, img: "/assets/images/listing/2.jpg", title: "Singapore", hotels: "3 Hotels" },
    { id: 3, img: "/assets/images/listing/3.jpg", title: "Paris, France", hotels: "3 Hotels" },
    { id: 4, img: "/assets/images/listing/4.jpg", title: "Goa, India", hotels: "3 Hotels" },
    { id: 5, img: "/assets/images/listing/5.jpg", title: "Whistler, Canada", hotels: "3 Hotels" },
    { id: 6, img: "/assets/images/listing/6.jpg", title: "Kuala Lumpur, Malaysia", hotels: "3 Hotels" },
    { id: 7, img: "/assets/images/listing/7.jpg", title: "Sydney, Australia", hotels: "3 Hotels" },
  ];

  const testimonials = [
    { id: 1, img: "/assets/images/client/01.jpg", name: "Calvin Carlo", role: "Manager", quote: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today." },
    { id: 2, img: "/assets/images/client/02.jpg", name: "Christa Smith", role: "Manager", quote: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
    { id: 3, img: "/assets/images/client/03.jpg", name: "Jemina CLone", role: "Manager", quote: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others." },
    { id: 4, img: "/assets/images/client/04.jpg", name: "Smith Vodka", role: "Manager", quote: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts." },
    { id: 5, img: "/assets/images/client/05.jpg", name: "Cristino Murfi", role: "Manager", quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required." },
    { id: 6, img: "/assets/images/client/06.jpg", name: "Cristino Murfi", role: "Manager", quote: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero." },
  ];

  const handleNextSlide1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };

  const handlePrevSlide1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  const handleNextSlide2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  const handlePrevSlide2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative block h-screen" id="home">
        <div className="absolute inset-0 w-full h-full">
          <div className="swiper-wrapper">
            <div className="flex items-center overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full flex items-center bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/bg/2.jpg')" }}
              >
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                  <div className="grid grid-cols-1">
                    <div className="text-center">
                      <img src="/assets/images/map-plane.png" className="mx-auto w-[300px]" alt=""/>
                      <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Find Your Best <br/> Travels Package</h1>
                      <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                      
                      <div className="mt-6">
                        <a href="#" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="relative py-16 bg-gray-50">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <form className="p-6 bg-white rounded-xl shadow-sm">
              <div className="registration-form text-slate-900 text-start">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label className="form-label font-medium text-slate-900">Search:</label>
                    <div className="relative mt-2">
                      <i data-feather="search" className="size-[18px] absolute top-[10px] start-3 text-slate-400"></i>
                      <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent rounded-md outline-none border border-gray-100 focus:ring-0" placeholder="Search"/>
                    </div>
                  </div>

                  <div>
                    <label className="form-label font-medium text-slate-900">Check-in Date:</label>
                    <div className="relative mt-2">
                      <i data-feather="calendar" className="size-[18px] absolute top-[10px] start-3 text-slate-400"></i>
                      <input name="name" type="text" id="checkin-date" className="w-full py-2 px-3 ps-10 h-10 bg-transparent rounded-md outline-none border border-gray-100 focus:ring-0" placeholder="Check-in Date"/>
                    </div>
                  </div>

                  <div>
                    <label className="form-label font-medium text-slate-900">Check-out Date:</label>
                    <div className="relative mt-2">
                      <i data-feather="calendar" className="size-[18px] absolute top-[10px] start-3 text-slate-400"></i>
                      <input name="name" type="text" id="checkout-date" className="w-full py-2 px-3 ps-10 h-10 bg-transparent rounded-md outline-none border border-gray-100 focus:ring-0" placeholder="Check-out Date"/>
                    </div>
                  </div>

                  <div>
                    <label className="form-label font-medium text-slate-900">No. of person:</label>
                    <div className="relative mt-2">
                      <i data-feather="users" className="size-[18px] absolute top-[10px] start-3 text-slate-400"></i>
                      <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent rounded-md outline-none border border-gray-100 focus:ring-0">
                        <option disabled selected>No. of person</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="lg:mt-[35px]">
                    <input type="submit" id="search-buy" name="search" className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer" value="Search"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative md:py-24 py-16 overflow-hidden">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
            <div className="md:col-span-5">
              <div className="relative">
                <img src="/assets/images/about.jpg" className="mx-auto rounded-3xl shadow-sm w-[90%]" alt=""/>
                
                <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md bg-white w-56 m-3">
                  <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                    <i data-feather="users" className="size-6"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400">Visitor</span>
                    <p className="text-xl font-bold"><span className="counter-value" data-target="4589">2100</span></p>
                  </div>
                </div>

                <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md bg-white w-60 m-3">
                  <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                    <i data-feather="globe" className="size-6"></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400">Travel Packages</span>
                    <p className="text-xl font-bold"><span className="counter-value" data-target="50">1</span>+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="lg:ms-8">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">World Best Travel <br/> Agency: Travosy</h3>

                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                <a href="#" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></a>
              </div>
            </div>

            <div className="absolute bottom-0 start-1/3 -z-1">
              <img src="/assets/images/map-plane-big.png" className="lg:w-[600px] w-96" alt=""/>
            </div>
          </div>
        </div>

        {/* Top Destinations Section */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Explore our most popular destinations that travelers love to visit</p>
          </div>

          <div className="relative mt-6">
            <Slider ref={sliderRef1} {...sliderSettings1}>
              {destinations.map((destination) => (
                <div key={destination.id} className="px-2">
                  <div className="group rounded-md shadow-sm overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img src={destination.img} className="w-full h-48 object-cover group-hover:scale-110 duration-500" alt={destination.title}/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 start-4 end-4">
                        <h5 className="text-white font-semibold text-lg">{destination.title}</h5>
                        <p className="text-white/80 text-sm">{destination.hotels}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            {/* Navigation arrows for Top Destinations */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrevSlide1}
                className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:text-red-500"
              >
                <i className="mdi mdi-chevron-left text-xl"></i>
              </button>
              <button 
                onClick={handleNextSlide1}
                className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:text-red-500"
              >
                <i className="mdi mdi-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Tours Packages Section */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">                    
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/1.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>
                  <div className="absolute top-0 start-0 p-4">
                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">10% Off</span>
                  </div>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>
                
                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Dubai</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Cuba Sailing Adventure</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/2.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Italy</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Tour in New York</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/3.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Maldivas</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Discover Greece</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/4.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> USA</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Museum of Modern Art</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/5.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Bali</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Peek Mountain View</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/6.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>
                  <div className="absolute top-0 start-0 p-4">
                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">25% Off</span>
                  </div>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Bangkok</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Hot Baloon Journey</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/7.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Singapore</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Orca Camp Kayaking Trip</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group rounded-md shadow-sm">
              <div className="md:flex md:items-center">
                <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm md:m-3 mx-3 mt-3">
                  <img src="/assets/images/listing/8.jpg" className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>
                  <div className="absolute top-0 start-0 p-4">
                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">20% Off</span>
                  </div>

                  <div className="absolute top-0 end-0 p-4">
                    <a href="#" className="size-8 inline-flex justify-center items-center bg-white shadow-sm rounded-full text-slate-700 hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></a>
                  </div>
                </div>

                <div className="p-4 w-full">
                  <p className="flex items-center text-slate-400 font-medium mb-2"><i data-feather="map-pin" className="text-red-500 size-4 me-1"></i> Thailand</p>
                  <a href="tour-detail-one.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">Caño Cristales River Trip</a>

                  <div className="flex items-center mt-2">
                    <span className="text-slate-400">Rating:</span>
                    <ul className="text-lg font-medium text-amber-400 list-none ms-2">
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                      <li className="inline text-slate-900 text-sm">5.0(30)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100">
                    <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                    <a href="#" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Users Say</h3>

            <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
          </div>

          <div className="mt-6">
            <Slider ref={sliderRef2} {...sliderSettings2}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="text-center">
                    <div className="content relative rounded shadow-sm m-2 p-6 bg-white before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white before:border-b-white before:border-s-transparent before:shadow-testi before:origin-top-left">
                      <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                      <p className="text-slate-400">"{testimonial.quote}"</p>
                      <ul className="list-none mb-0 text-amber-400 mt-3">
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                        <li className="inline"><i className="mdi mdi-star"></i></li>
                      </ul>
                    </div>
                    
                    <div className="text-center mt-5">
                      <img src={testimonial.img} className="size-14 rounded-full shadow-md mx-auto" alt={testimonial.name}/>
                      <h6 className="mt-2 font-semibold">{testimonial.name}</h6>
                      <span className="text-slate-400 text-sm">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            {/* Navigation arrows for Testimonials */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrevSlide2}
                className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:text-red-500"
              >
                <i className="mdi mdi-chevron-left text-xl"></i>
              </button>
              <button 
                onClick={handleNextSlide2}
                className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-900 hover:text-red-500"
              >
                <i className="mdi mdi-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Travel Blogs Section */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Travel Blogs</h3>

            <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div className="group relative overflow-hidden">
              <div className="relative overflow-hidden rounded-md shadow-sm">
                <img src="/assets/images/blog/1.jpg" className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                  <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Travel</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex mb-4">
                  <span className="flex items-center text-slate-400 text-sm"><i data-feather="clock" className="size-4 text-slate-900 me-1.5"></i>5 min read</span>
                  <span className="text-slate-400 text-sm ms-3">by <a href="#" className="text-slate-900 hover:text-red-500 font-medium">Travosy</a></span>
                </div>

                <a href="blog-detail.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">This Spanish city is a feast for the eyes: Travosy</a>
                <p className="text-slate-400 mt-2">This is required when, for example, the final text is not yet available.</p>

                <div className="mt-3">
                  <a href="blog-detail.html" className="hover:text-red-500 inline-flex items-center">Read More <i data-feather="chevron-right" className="size-4 ms-1"></i></a>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden">
              <div className="relative overflow-hidden rounded-md shadow-sm">
                <img src="/assets/images/blog/2.jpg" className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                  <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Tour</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex mb-4">
                  <span className="flex items-center text-slate-400 text-sm"><i data-feather="clock" className="size-4 text-slate-900 me-1.5"></i>5 min read</span>
                  <span className="text-slate-400 text-sm ms-3">by <a href="#" className="text-slate-900 hover:text-red-500 font-medium">Travosy</a></span>
                </div>

                <a href="blog-detail.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">New Zealand's South Island brims with majestic</a>
                <p className="text-slate-400 mt-2">This is required when, for example, the final text is not yet available.</p>

                <div className="mt-3">
                  <a href="blog-detail.html" className="hover:text-red-500 inline-flex items-center">Read More <i data-feather="chevron-right" className="size-4 ms-1"></i></a>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden">
              <div className="relative overflow-hidden rounded-md shadow-sm">
                <img src="/assets/images/blog/3.jpg" className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                  <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">Tourist</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex mb-4">
                  <span className="flex items-center text-slate-400 text-sm"><i data-feather="clock" className="size-4 text-slate-900 me-1.5"></i>5 min read</span>
                  <span className="text-slate-400 text-sm ms-3">by <a href="#" className="text-slate-900 hover:text-red-500 font-medium">Travosy</a></span>
                </div>

                <a href="blog-detail.html" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">When you visit the Eternal Rome City: Travosy</a>
                <p className="text-slate-400 mt-2">This is required when, for example, the final text is not yet available.</p>

                <div className="mt-3">
                  <a href="blog-detail.html" className="hover:text-red-500 inline-flex items-center">Read More <i data-feather="chevron-right" className="size-4 ms-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};