import React from 'react'
import img from '../imgs/hero-bg.png'

const Hero = () => {
    return (
        
    // <!-- Hero -->
    <section class="relative mt-14 lg:mt-28  ">
      <div class="container flex flex-col-reverse items-center  lg:flex-row   " >
        <div class="flex-1 flex flex-col md:mt-10  items-center   text-center lg:items-start " >
          <h1 class="text-3xl capitalize mb-6 items-center  md:text-4xl lg:text-5xl text-center md:text-left">A simple bookmark manager</h1>
          <p class="text-bookmark-grey mb-6 text-center  md:text-left text-lg "> A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
            load instantly. Try it for free.</p>
             <div class="flex flex-wrap justify-center gap-8 sm:justify-start ">
               <button class="text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 shadow-md">Get it on chrome</button>
               <button class="text-bookmark-black text-lg  bg-bookmark-white py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-purple hover:text-bookmark-white transition duration-300 shadow-md">Get it on opera</button>
             </div>
        </div>
        <div class="flex-1 flex justify-center mb-20 md:mb-16 lg:mb-0 z-10">
          <img src={img} alt="img" class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full "></img>
        </div>
      </div>
      <div class="hidden md:block h-80 w-1/2 bg-bookmark-purple 
      rounded-l-full absolute top-32 right-0 
      lg:-bottom-38 lg:-right-36 overflow-hidden "></div>
    </section>
    )
}

export default Hero
