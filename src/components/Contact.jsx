import React from 'react'
import Navtwo from '../components/Navtwo'

const Contact = () => {
  return (
    <div>
        <Navtwo/>
        <div className='flex bg-[#EAEFEE]  w-[97vw] justify-center items-center    mx-auto my-2 rounded-4xl'>
      {/* <Navtwo/> */}
       


<div className=" px-15 lg:h-[80vh]  mx-auto flex flex-col md:flex-row md:gap-15 gap-5 items-center justify-start py-16">
    <div className=' h-full md:flex  hidden justify-center pt-18  items-center '>
  <img src="/images/contact.PNG" className='h-[60vh] rounded-4xl' alt="" />
</div>
  {/* Left side - Form */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <form className="space-y-5">
      {/* Name */}
      <div className="flex items-center justify-center ">
        <label className="text-gray-700 font-medium w-24" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="flex-1 border-b border-gray-400 focus:border-black focus:outline-none p-2"
        />
      </div>

      {/* Email */}
      <div className="flex items-center ">
        <label className="text-gray-700 font-medium w-24" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="flex-1 border-b border-gray-400 focus:border-black focus:outline-none p-2"
        />
      </div>

      {/* Purpose */}
      <div className="flex items-center ">
        <label className="text-gray-700 font-medium w-24" htmlFor="purpose">
          Purpose:
        </label>
        <input
          type="text"
          id="purpose"
          placeholder="Reason for contacting"
          className="flex-1 border-b border-gray-400 focus:border-black focus:outline-none p-2"
        />
      </div>

      {/* Message */}
      <div className="flex items-start ">
        <label className="text-gray-700 font-medium w-24 pt-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          placeholder="Your message..."
          rows="2"
          className="flex-1 border-b border-gray-400 focus:border-black focus:outline-none p-2 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        Send Message
      </button>
    </form>
  </div>

  {/* Right side - Contact Info */}
  <div className="flex-1 space-y-6 mt-8 md:mt-0">
    <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
    <p className="text-black">
      <span className="font-semibold">Phone:</span> 
      <div>+10101010101</div>
    </p>
    <p className="text-black">
      <span className="font-semibold">Email:</span> 
      <div>ecommerce.@ecom.com</div>
    </p>
    <p className="text-black">
      <span className="font-semibold">Address:</span>
      <div>NY 212 Main BLVD 8733 London</div>
    </p>
    <p className="text-black">
      Feel free to reach out for any questions, collaborations, or support inquiries.
    </p>
  </div>
</div>


    </div>
    </div>
  )
}

export default Contact