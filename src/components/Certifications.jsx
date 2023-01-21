import React from 'react'

const Certifications = () => {
  return (
   <div className=" bg-black flex flex-col justify-center relative overflow-hidden sm:py-12">
   <div className="max-w-7xl mx-auto ">
     <div className="relative group">
       <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
       <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
         <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
         </svg>
         <div className="space-y-2">
           <p className="text-slate-800 text-2xl">Some of my certifcations </p>
           <a href="https://github.com/prajwalsable99/certificates" className="block text-indigo-800 group-hover:text-slate-800 transition duration-200" target="_blank">Read more →</a>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Certifications