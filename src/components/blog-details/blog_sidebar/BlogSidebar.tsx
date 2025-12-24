import React, { useState, useEffect } from "react";

function BlogSidebar() {
  const [isMounted, setIsMounted] = useState(false);

    // Theme color
    const themeColor = "#fb2c36";

    // Blog details data
    const blogDetails = {
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
        "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout."
        ],
        authorBio: "Cristina Romsey is a passionate travel writer and photographer who has visited over 50 countries. She specializes in adventure travel and landscape photography, capturing breathtaking moments from around the world.",
        authorRole: "Content Writer"
    };

    // Social media links
    const socialLinks = [
        { icon: "facebook", href: "#" },
        { icon: "instagram", href: "#" },
        { icon: "twitter", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "github", href: "#" },
        { icon: "youtube", href: "#" },
        { icon: "gitlab", href: "#" }
    ];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-[#fb2c36] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Blog Details...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="sticky top-24 space-y-8">
            {/* Author Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-slate-700 overflow-hidden">
                <div className="p-6">
                <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-slate-700">
                    Author
                </h5>
                
                <div className="text-center px-6 pb-6">
                    <img 
                    src={blogDetails.authorImage} 
                    className="h-24 w-24 mx-auto rounded-full shadow-md mb-4 border-4 border-white dark:border-slate-800"
                    alt={blogDetails.author}
                    />
                    
                    <h6 className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#fb2c36] transition-all duration-300">
                    {blogDetails.author}
                    </h6>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 mb-4">{blogDetails.authorRole}</p>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {blogDetails.authorBio}
                    </p>
                </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-slate-700 overflow-hidden">
                <div className="p-6">
                <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-slate-700">
                    Follow Us
                </h5>
                
                <ul className="flex flex-wrap justify-center gap-3">
                    {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a 
                        href={social.href}
                        className="inline-flex items-center justify-center size-12 rounded-lg border transition-all duration-300 hover:scale-110"
                        style={{ 
                            borderColor: themeColor + '30',
                            color: themeColor,
                            backgroundColor: themeColor + '10'
                        }}
                        >
                        {social.icon === "facebook" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        )}
                        {social.icon === "instagram" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        )}
                        {social.icon === "twitter" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        )}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar