import React from 'react'

interface Tour {
  id: number;
  title: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  discount: string | null;
  price: string;
  liked: boolean;
}

interface MyTourProps {
  userTours: Tour[];
  toggleLike: (id: number) => void;
}

function MyTour({ userTours, toggleLike }: MyTourProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">My Tours</h3>
        <a href="#" className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userTours.map((tour) => (
          <div key={tour.id} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600">
            <div className="relative overflow-hidden h-48">
              <img 
                src={tour.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={tour.title}
              />
              
              {tour.discount && (
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tour.discount}
                  </span>
                </div>
              )}
              
              <button 
                onClick={() => toggleLike(tour.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill={tour.liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {tour.location}
              </div>
              
              <h4 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
                <a href="#" className="hover:text-red-500 transition-colors">
                  {tour.title}
                </a>
              </h4>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-2">
                  {[...Array(tour.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {tour.rating}.0 ({tour.reviews})
                </span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-600">
                <span className="text-lg font-bold text-red-500">{tour.price}</span>
                <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 flex items-center">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTour