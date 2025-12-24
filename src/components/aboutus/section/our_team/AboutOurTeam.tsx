import React, { useState, useEffect } from "react";

function AboutOurTeam() {
    const [isMounted, setIsMounted] = useState(false);

    const teamMembers = [
        { id: 1, name: "Jack John", role: "Agent", image: "/assets/images/client/04.jpg" },
        { id: 2, name: "Krista John", role: "Agent", image: "/assets/images/client/05.jpg" },
        { id: 3, name: "Roger Jackson", role: "Agent", image: "/assets/images/client/06.jpg" },
        { id: 4, name: "Johnny English", role: "Agent", image: "/assets/images/client/07.jpg" },
    ];
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
            <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-custom-red rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading Tour Details...</p>
            </div>
        </div>
        );
    }
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Team</h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                This is just a simple text made for this unique and awesome template, you can replace it with any text.
                </p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                {teamMembers.map((member) => (
                <div key={member.id} className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                        <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-2">
                        <li className="inline">
                            <a href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-600 transition-colors">
                            <i className="mdi mdi-facebook text-sm"></i>
                            </a>
                        </li>
                        <li className="inline">
                            <a href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-600 transition-colors">
                            <i className="mdi mdi-instagram text-sm"></i>
                            </a>
                        </li>
                        <li className="inline">
                            <a href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-600 transition-colors">
                            <i className="mdi mdi-linkedin text-sm"></i>
                            </a>
                        </li>
                        </ul>
                    </div>

                    <div className="content mt-3">
                        <a href="#" className="text-lg font-semibold hover:text-red-500 duration-500 block">{member.name}</a>
                        <p className="text-slate-400">{member.role}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default AboutOurTeam