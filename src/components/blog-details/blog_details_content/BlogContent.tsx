// @components/blog-details/blog_details_content/BlogContent.tsx
import React, { useEffect } from "react";

interface BlogContentProps {
  blogData?: {
    id: number;
    title: string;
    short_description: string;
    description: string;
    featured_image: string;
    feature_image: string;
    category_name: string;
    category_id: number;
    views: number;
    views_formatted: string;
    reading_time: string;
    created_by_name: string;
    created_at_formatted: string;
    duration: string;
  };
}

function BlogContent({ blogData }: BlogContentProps) {
  const themeColor = "#fb2c36";

  useEffect(() => {
    console.log("Blog Data in BlogContent:", blogData);
  }, []);

  // Use real data or fallback to dummy data
  const blogDetails = blogData ? {
    title: blogData.title,
    category: blogData.category_name || "Uncategorized",
    image: blogData.featured_image,
    author: blogData.created_by_name || "Author",
    authorImage: "/assets/images/client/05.jpg",
    date: blogData.created_at_formatted || "Unknown date",
    readTime: blogData.duration ? `${blogData.duration} Min Read` : "5 Min Read",
    views: blogData.views || "0",
    comments: 94, // You might want to add this to your API
    content: blogData.description ? [blogData.description] : [
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself."
    ],
    authorBio: `${blogData.created_by_name} is a passionate travel writer and photographer who has visited over 50 countries. She specializes in adventure travel and landscape photography, capturing breathtaking moments from around the world.`,
    authorRole: "Content Writer"
  } : {
    title: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
    category: "Photography",
    image: "/assets/images/blog/9.jpg",
    author: "Travosy",
    authorImage: "/assets/images/client/05.jpg",
    date: "8th February 2024",
    readTime: "8 Min Read",
    views: "3.9k",
    comments: 94,
    content: [
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      "There are many variations of passages of Lorem Ipsum available.",
      "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum."
    ],
    authorBio: "Cristina Romsey is a passionate travel writer and photographer who has visited over 50 countries.",
    authorRole: "Content Writer"
  };

  return (
    <div className="lg:col-span-8 md:col-span-6">
      {/* Blog Image with Category Badge */}
      <div className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-slate-700 mb-8">
        <div className="relative overflow-hidden">
          <img 
            src={blogDetails.image} 
            className="w-full h-auto object-cover"
            alt={blogDetails.title}
          />
          <div className="absolute top-4 left-4">
            <span 
              className="text-white text-xs px-3 py-1.5 font-semibold rounded-full"
              style={{ backgroundColor: themeColor }}
            >
              {blogDetails.category}
            </span>
          </div>
        </div>
      </div>
      
      {/* Blog Stats */}
      <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-slate-700 gap-4">
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {blogDetails.views} views
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {blogDetails.comments} comments
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {blogDetails.date}
        </div>
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" style={{ color: themeColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {blogDetails.readTime}
        </div>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
        {blogDetails.title}
      </h1>

      {/* Blog Content */}
      <div className="space-y-6">
        {blogDetails.content.map((paragraph, index) => (
          <p key={index} className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
        
        {/* Quote Section */}
        <div className="italic border-l-4 my-8 p-6 rounded-r-xl bg-gray-50 dark:bg-slate-800"
              style={{ borderColor: themeColor }}>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
          </p>
        </div>
      </div>
      

            {/* Comment Form */}
        <div className="mt-12 p-6 rounded-xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-slate-700">
        <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Leave A Comment:
        </h5>

        <form className="space-y-6">
            <div className="grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
                <div className="text-left">
                <label htmlFor="name" className="font-semibold text-slate-900 dark:text-white block mb-2">
                    Your Name:
                </label>
                <input 
                    id="name" 
                    type="text" 
                    className="w-full px-4 py-3 bg-transparent dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-[#fb2c36] focus:ring-2 focus:ring-[#fb2c36]/20 transition-all duration-300"
                    placeholder="Name"
                />
                </div>
            </div>

            <div className="lg:col-span-6">
                <div className="text-left">
                <label htmlFor="email" className="font-semibold text-slate-900 dark:text-white block mb-2">
                    Your Email:
                </label>
                <input 
                    id="email" 
                    type="email" 
                    className="w-full px-4 py-3 bg-transparent dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-[#fb2c36] focus:ring-2 focus:ring-[#fb2c36]/20 transition-all duration-300"
                    placeholder="Email"
                />
                </div>
            </div>
            </div>

            <div>
            <div className="text-left">
                <label htmlFor="comments" className="font-semibold text-slate-900 dark:text-white block mb-2">
                Your Comment:
                </label>
                <textarea 
                id="comments" 
                className="w-full px-4 py-3 bg-transparent dark:bg-slate-900 text-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 dark:border-slate-700 focus:border-[#fb2c36] focus:ring-2 focus:ring-[#fb2c36]/20 transition-all duration-300 h-36"
                placeholder="Your comment..."
                ></textarea>
            </div>
            </div>
            
            <button 
            type="submit" 
            className="w-full py-3 px-5 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: themeColor, color: 'white' }}
            >
            Send Message
            </button>
        </form>
        </div>
    </div>
  );
}

export default BlogContent;