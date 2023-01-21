
import React from 'react'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.png'




const Header = () => {
  return (
    <div id='Home' className="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-white rounded-full">Hey guys,Prajwal is here</p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-yellow-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
            The purpose of  coding
              <br className="hidden md:block" />
              {' '}is to control complexity, {' '}
              <span className="inline-block text-deep-purple-accent-400">not to create it.</span>
            </h2>
            <p className="text-gray-100 text-base md:text-lg text-justify">

            I am computer engineering student currently studying.If you are reading this then i would like you to  have a look at my profile so that you will get idea about my work.I personally like to work on data science,web development and problem solving . 
                 
            </p>
          </div>
           <div className="flex items-center space-x-3">
          
            <a  href="https://github.com/prajwalsable99" target={'_blank'} rel='noreferrer' className="border-2 border-blue-600 rounded-lg px-6 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
          Github
        </a>
        <a href="https://wa.me/7517780449" target={'_blank'} className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" rel='noreferrer'>
        
          Whatsapp
        </a>

          </div> 

        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-2/5">
            <img className="object-cover" src={hero1} alt="" />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src={hero2} alt="" />
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Header;