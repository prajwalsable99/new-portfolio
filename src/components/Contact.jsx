import React from 'react'
import { useState } from 'react';
const Contact = () => {
  const scripturl= "https://script.google.com/macros/s/AKfycbwXa06Gs3okge3bMtO6mLz9Q6HmpDzWlzBYV_6RksLu1ixvQ_sD1NR91Q_RGBHIKz6-Ag/exec";


  const dosubmit =(aname,aemail,amessage)=>{
    let requestBody = new FormData();
    requestBody.append('Name',aname);
    requestBody.append('Email',aemail);
    requestBody.append('Message',amessage);
    

    fetch(scripturl, { method: 'POST', body: requestBody})
       .then(response => {
        // console.log(response)
          // alert('Success!', response)
          // submitButton.disabled = false
         })
       .catch(error => {
      //  alert('Error!', error.message)
        //  submitButton.disabled = false

       }
       )
  }

  const [data,setData]=useState({name:"",email:"",message:""});
  
  const handleclick=(e)=>{
    e.preventDefault();
    // console.log(data.name,data.email,data.message);
    alert("Sending message please wait...")
    dosubmit(data.name,data.email,data.message);

    setData({name:"",email:"",message:""});
    
    
    
}
const onChange=(e)=>{
    //VVIP
    
    setData({...data,[e.target.name]:e.target.value})
}
  




  return (
    <section id='feedback'  className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      
      <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.2302609250225!2d74.05181512441891!3d18.831242985947842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d312f4a48aa1%3A0x920f1cbfca407b74!2sRooplaxmi%20Jewellery%20Pabal!5e0!3m2!1sen!2sin!4v1674318337317!5m2!1sen!2sin" style={{filter: "grayscale(0) contrast(1.2) opacity(0.8)"}}></iframe>
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Behind Ruplaxmi Jewellers</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-400 leading-relaxed">prajsa99@gmail.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+91 7517780449</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
    <form onSubmit={handleclick}>
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5">Get in touch with me</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input type="text" id="name" name="name" required={true}
         value={data.name} onChange={onChange}
         className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
         
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" 
        value={data.email} onChange={onChange} required={true}
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message"
         value={data.message}  onChange={onChange} required={true}
         className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="
      border-2 border-yellow-600 rounded-lg px-6 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200"
      type='submit'
      >Send</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Please fill the valid details.Thank you !</p>
      </form>
    </div>
  </div>
</section>
  )
}

export default Contact