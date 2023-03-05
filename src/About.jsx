import React from 'react'
import Nav from './Nav'
import intro from './images/illustration-stay-productive.png'
function About() {
  return (
    <>
    <Nav/>
    <br/><br/>

   <div className="hero m-0 md:m-10">
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-center px-6 mx-auto  space-y-0 md:space-y-0">
      <div className="heroLeft flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="text-3xl font-bold text-center md:text-4xl md:text-left max-w-md mt-4">
            Save up your device storage on our platform
        </h1>
        <p className='max-w-md text-justify  md:-ml-[3px] md:text-left'>Numerous activities and files eat up space on your device.Worried about where to store your images for future purposes, SOI can cover all your large images file with just an upload button. Hurray!!</p>
        <div className="flex justify-center md:justify-start">
          <button>Get Started</button>
        </div>
      </div>

      <div className="heroImg w-full md:w-1/2">
        <img src={intro} />


      </div>

    </div>

   </div>

   <div className="bg-gray-100 md:h-[450px] h-[1000px] p-3">
    <h1 className="text-center font-bold text-3xl m-4 mb-[50px] text-orange-400">Our Benefits</h1>

    <div className="flex flex-col md:flex-row items-center justify-around gap-3">

        <div className="bg-white p-3 h-[200px] md:w-[800px] flex flex-col items-center justify-between">
            <h2 className="font-bold text-sm">File Storage</h2>
            <p className='text-[15px] text-justify'>We can stress the fact of storage on our platform. Our storage facilities scales up as more images ae been stored</p>
        </div>
        <div className="bg-white p-3 h-[200px] md:w-[800px] flex flex-col items-center justify-between">
            <h2 className="font-bold text-sm">Easy to use</h2>
            <p className='text-[15px] text-justify'>We make our platform more user friendly. It doesn't require any technical-know-now to use the platform</p>
        </div>
        <div className="bg-white p-3 h-[200px] md:w-[800px] flex flex-col items-center justify-between">
            <h2 className="font-bold text-sm">Downloadable</h2>
            <p className='text-[15px] text-justify'>Stored files can be later be retrieved for future uses and purposes</p>
        </div>
        <div className="bg-white p-3 h-[200px] md:w-[800px] flex flex-col items-center justify-between">
            <h2 className="font-bold text-sm">Share</h2>
            <p className='text-[15px] text-justify'>Saved images can be shared among family and friends and even also on social media</p>
        </div>

    </div>
   </div>
      
    </>
  )
}

export default About
