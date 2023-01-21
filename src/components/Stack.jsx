import React from 'react'
import { Link } from 'react-router-dom'
import icon2 from '../assets/images/icon2.png'
const Stack = () => {
    return (
        <section >
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
                <h2 className="mb-8 text-4xl font-bold leading-none text-center">What do we have to offer?</h2>
                <ul className="grid auto-cols-auto">

                
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                            <img src={icon2} alt="" />
                        </div>
                
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                            <img src={icon2} alt="" />
                        </div>
                
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                            <img src={icon2} alt="" />
                        </div>
                
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full ">
                            <img src={icon2} alt="" />
                        </div>
                
                
                  
                    
                   
                </ul>
            </div>
        </section>
    )
}

export default Stack