import React from 'react'

function SocialProfile() {
  return (
    <div className="p-6">
        <div className="md:flex">
            <div className="md:w-1/3">
                <span className="font-medium">Twitter</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                    <div className="form-icon relative">
                        <i data-feather="twitter" className="w-4 h-4 absolute top-3 start-4"></i>
                        <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Twitter Profile Name" id="twitter_name" name="name" required=""/>
                    </div>
                </form>

                <p className="text-slate-400 mt-1">Add your Twitter username (e.g. jesus).</p>
            </div>
        </div>
        
        <div className="md:flex mt-8">
            <div className="md:w-1/3">
                <span className="font-medium">Facebook</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                    <div className="form-icon relative">
                        <i data-feather="facebook" className="w-4 h-4 absolute top-3 start-4"></i>
                        <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Facebook Profile Name" id="facebook_name" name="name" required=""/>
                    </div>
                </form>

                <p className="text-slate-400 mt-1">Add your Facebook username (e.g. jesus).</p>
            </div>
        </div>
        
        <div className="md:flex mt-8">
            <div className="md:w-1/3">
                <span className="font-medium">Instagram</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                    <div className="form-icon relative">
                        <i data-feather="instagram" className="w-4 h-4 absolute top-3 start-4"></i>
                        <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Instagram Profile Name" id="insta_name" name="name" required=""/>
                    </div>
                </form>

                <p className="text-slate-400 mt-1">Add your Instagram username (e.g. jesus).</p>
            </div>
        </div>
        
        <div className="md:flex mt-8">
            <div className="md:w-1/3">
                <span className="font-medium">Linkedin</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                    <div className="form-icon relative">
                        <i data-feather="linkedin" className="w-4 h-4 absolute top-3 start-4"></i>
                        <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Linkedin Profile Name" id="linkedin_name" name="name" required=""/>
                    </div>
                </form>

                <p className="text-slate-400 mt-1">Add your Linkedin username.</p>
            </div>
        </div>
        
        <div className="md:flex mt-8">
            <div className="md:w-1/3">
                <span className="font-medium">Youtube</span>
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0">
                <form>
                    <div className="form-icon relative">
                        <i data-feather="youtube" className="w-4 h-4 absolute top-3 start-4"></i>
                        <input type="url" className="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Youtube url" id="you_url" name="url" required=""/>
                    </div>
                </form>

                <p className="text-slate-400 mt-1">Add your Youtube url.</p>
            </div>
        </div>

        <div className="md:flex">
            <div className="md:w-1/3">
                <span className="font-medium"></span>
                <button className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-5">Save Social Profile</button>
            </div>
        </div>
    </div>
  )
}

export default SocialProfile