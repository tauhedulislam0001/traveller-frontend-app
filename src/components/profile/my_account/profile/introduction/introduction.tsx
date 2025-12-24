import React from 'react'

function Introduction() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Introduction</h3>
        <button className="text-red-500 hover:text-red-600 font-medium text-sm">
            Edit Bio
        </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus how to pursue pleasure rationally encounter but because those who do not know how to pursue consequences that are extremely.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum dicta saepe fugit, qui commodi possimus vero pariatur asperiores. Sed impedit reprehenderit deserunt culpa incidunt iste laborum placeat molestiae illo?
        </p>
    </div>
  )
}

export default Introduction