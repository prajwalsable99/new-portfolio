import React from 'react'
import pr1 from '../assets/images/pr1.jpeg'
import pr2 from '../assets/images/pr2.png'
import pr6 from '../assets/images/pr6.jpeg'
import pr5 from '../assets/images/pr5.jpg'
import pr3 from '../assets/images/p3.png'
import pr4 from '../assets/images/pr4.png'
const Projects = () => {
  return (
    // <!-- component -->
<div id='Project' className="flex justify-center items-center bg-black">
  {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-yellow-400">Projects</h1>
      <p className="text-base leading-normal text-center text-white mt-1 lg:w-1/2 md:w-10/12 w-11/12">Here are some of my projects </p>
    </div>
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">11 Nov 2020</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">Tic Tac Toe</h2>
                <p className="text-base leading-4 text-white mt-2">Andoid application developed in python-kivy</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <a className="pr-2 text-sm font-medium leading-none"  href='https://github.com/prajwalsable99/android_tic-tac-toe_game_using_kivy' target="_blank">Read More</a>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={pr1}className="w-full " alt="chair" />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">15 Feb 2020</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">Paint application </h2>
                <p className="text-base leading-4 text-white mt-2">Tkinter UI library in python</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <a className="pr-2 text-sm font-medium leading-none" href='https://github.com/prajwalsable99/starting_tkinter_projects' target={"_blank"}>Read More</a>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={pr2} className="w-full " alt="wall design " />
          </div>
        </div>
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Dec 2022</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">Netflix Clone</h2>
              <p className="text-base leading-4 text-white mt-2">MERN-stack web app</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <a className="pr-2 text-sm font-medium leading-none" href='https://github.com/prajwalsable99/Netflix-Clone-React' target={'_blank'}>Read More</a>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={pr4} alt="sitting place" className="w-full mt-8 md:mt-6 hidden  sm:block" />
          <img className="w-full mt-4  sm:hidden" src={pr4} alt="sitting place" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">17 Oct 2022</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">Food Reciepe Application</h2>
              <p className="text-base leading-4 text-white mt-2">react and api</p>
              <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <a href='https://github.com/prajwalsable99/Food-app-using-api-React-' target={'_blank'}className="pr-2 text-sm font-medium leading-none">Read More</a>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src={pr3} alt="sitting place" className="w-full sm:block hidden " />
          <img className="w-full  sm:hidden " src={pr3} alt="sitting place" />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 oct 2022</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">Bank Sysytem</h2>
                <p className="text-base leading-4 text-white mt-2">Java,Swing,frame and ODBC</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <a href='https://github.com/prajwalsable99/bank-system'target={'_blank'} className="pr-2 text-sm font-medium leading-none">Read More</a>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={pr5} className="w-full " alt="chair" />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">feb 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">Andoid-ml app</h2>
                <p className="text-base leading-4 text-white mt-2">App built using Android studio</p>
                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <a href='https://github.com/prajwalsable99/android-ml-app' className="pr-2 text-sm font-medium leading-none" target={'_blank'}>Read More</a>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src={pr6} className="w-full " alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Projects