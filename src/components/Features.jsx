import React from 'react'
import img1 from '../imgs/illustration-features-tab-1.png'
import img2 from '../imgs/illustration-features-tab-2.png'
import img3 from '../imgs/illustration-features-tab-3.png'

const Features = () => {
    return (
        // <!-- features  -->
        <section class="py-20 mt-20  lg:mt-48 bg-bookmark-white">
          <div class=" sm:w-3/4 md:w-5/12 text-center p-2 mx-auto">
            <h1 class="text-3xl mb-6 ">Features</h1>
            <p class=" text-bookmark-grey">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
          </div>
          
          <div class="relative">     
            <div class="container relative mt-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div class="flex-1 z-10  ">
                <img src={img1} alt="illustration-features-tab-1 " class="w-5/6 lg:w-full mx-auto"></img>
    
              </div>
              <div class=" text-center lg:text-left flex-1 flex flex-col lg:items-start items-center   lg:mt-0">
                <h1 class="text-3xl mb-4">Bookmark in one click</h1>
                <p class="text-bookmark-grey sm:w-3/4 lg:w-full mb-4">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                <button class="text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">more info</button>
              </div>
            </div>
            <div class="hidden lg:block h-80 w-1/2 bg-bookmark-purple 
            rounded-r-full absolute top-32 lg:-left-36 overflow-hidden
             "></div>
          </div>
    
          {/* <!-- 2 --> */}
          <div class="relative mt-20 lg:mt-52 ">     
            <div class="container flex flex-col lg:flex-row lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div class="flex-1 z-10 ">
                <img src={img2} alt="illustration-features-tab-2 " class="w-5/6 lg:w-full mx-auto"></img>
    
              </div>
              <div class=" text-center lg:text-left flex-1 flex flex-col  items-center lg:items-start mt-8 lg:mt-0">
                <h1 class="text-3xl mb-4">Intelligent search</h1>
                <p class="text-bookmark-grey sm:w-3/4 lg:w-full mb-4 ">Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all of your bookmarks..</p>
    
                <button class="text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">more info</button>
              </div>
            </div>
            <div class="hidden lg:block h-80 w-1/2 bg-bookmark-purple 
            rounded-l-full absolute top-44 -right-36 overflow-hidden"></div>
          </div>
    
          {/* <!-- 3 --> */}
          <div class="relative mt-20 lg:mt-52 ">     
            <div class="container relative mt-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div class="flex-1 z-10 ">
                <img src={img3} alt="illustration-features-tab-3 " class="w-5/6 lg:w-full mx-auto"></img>
    
              </div>
              <div class=" text-center lg:text-left flex-1 flex flex-col lg:items-start items-center mt-8 lg:mt-0">
                <h1 class="text-3xl mb-4">Share your bookmanrks</h1>
                <p class="text-bookmark-grey sm:w-3/4 lg:w-full mb-4">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
    
                <button class="text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">more info</button>
              </div>
            </div>
            <div class="hidden lg:block h-80 w-1/2 bg-bookmark-purple 
            rounded-r-full absolute top-44 -left-36 overflow-hidden "></div>
          </div>
    
    
        </section>
    )
}

export default Features
