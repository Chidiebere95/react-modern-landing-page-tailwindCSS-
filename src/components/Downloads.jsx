import React from 'react'
import img1 from '../imgs/logo-chrome.svg'
import img2 from '../imgs/logo-opera.svg'
import img3 from '../imgs/logo-firefox.svg'


const Downloads = () => {
    return (
        <section class="py-20 mt-20  lg:mt-48 ">
        <div class=" sm:w-3/4 lg:w-5/12 text-center p-2 mx-auto mb-8">
          <h1 class="text-3xl mb-4 ">Download the extension</h1>
          <p class=" text-bookmark-grey">We’ve got more browsers in the pipeline. Please do let us know 
            if you’ve got a favourite you’d like us to prioritize..</p>
        </div>
        <div class="grid max-w-screen-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col md:flex-row lg:flex-wrap ">
          {/* <!-- single item  --> */}
          <div class=" flex flex-1  flex-col items-center shadow-md  m-4 divide-y divide-light-blue-400 lg:mb-16">
            <div class="py-4  w-full  flex flex-col items-center">
                <img src={img1} alt="img-chrome" class=" mx-auto mb-5"></img>
              <h3 class="text-lg text-bookmark-blue mb-2">Add to Chrome</h3>
              <p class="text-md text-bookmark-grey mb-6">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-red" />
            <div class="flex p-6 border-t-bookmark-grey  w-full">
              <button class="flex-1 text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">Add & install extention</button>
            </div>
          </div>
        
          {/* <!-- single item-2  --> */}
          <div class=" flex flex-1  flex-col items-center shadow-md  m-4 divide-y divide-light-blue-400 lg:mt-8 lg:mb-8">
            <div class="py-4  w-full  flex flex-col items-center">
              <img src={img2} alt="img-opera" class=" mx-auto mb-5"></img>
              <h3 class="text-lg text-bookmark-blue mb-2">Add to Opera</h3>
              <p class="text-md text-bookmark-grey mb-6">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-red" />
            <div class="flex p-6 border-t-bookmark-grey  w-full">
              <button class="flex-1 text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">Add & install extention</button>
            </div>
          </div>
        
          {/* <!-- single item-3  --> */}
          <div class=" flex flex-1  flex-col items-center shadow-md  m-4 divide-y divide-light-blue-400 lg:mt-16">
            <div class="py-4  w-full  flex flex-col items-center">
              <img src={img3} alt="img-firefox" class=" mx-auto mb-5"></img>
              <h3 class="text-lg text-bookmark-blue mb-2">Add to Firefox</h3>
              <p class="text-md text-bookmark-grey mb-6">Minimum version 62</p>
            </div>
            <hr class="border-b border-bookmark-red" />
            <div class="flex p-6 border-t-bookmark-grey  w-full">
              <button class="flex-1 text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">Add & install extention</button>
            </div>
          </div>   
        </div>
        </section>
    )
}

export default Downloads
