import React from 'react'
import { FaFacebook,FaTwitter } from 'react-icons/fa';
import logo from '../imgs/logo-bookmark-white.png'

const NewsLetter = () => {
  return (
    <div>
      <section class="bg-bookmark-purple text-white py-20">
        <div class="p-2 text-center sm:w-3/4 lg:w-1/2 mx-auto">
          <h3 class=" mb-6">35,000+ ALREADY JOINED</h3>
          <h1 class="text-3xl mb-4 ">Stay up-to-date with what we’re doing</h1>
          <div class=" lg:px-0 flex flex-col sm:flex-row sm:gap-x-8 sm:items-center p-2">
            <input type="text" class="  sm:w-2/3 text-bookmark-grey  p-3 text-md mb-6 sm:mb-0 rounded" placeholder="Enter your email address"></input>
             <button class=" flex sm:w-36 text-center justify-center text-bookmark-white text-base  bg-bookmark-red py-3 px-7 rounded-md
              cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">contact us</button>

          </div>
        </div>
      </section>   
      
      <section class="bg-bookmark-blue p-8">
        <div class="flex flex-col md:flex-row md:justify-between items-center  mx-auto justify-center">
          <div class="flex flex-wrap items-center text-white text-xs gap-12  justify-center">
            <div class="flex flex-wrap items-center text-white text-xs gap-12 ">
              <img src={logo} alt="logo-bookmark"></img>

            </div>
            <div class="flex flex-wrap items-center text-white text-xs gap-12">

              <h3 class=" uppercase">features</h3>
              <h3 class=" uppercase">pricing</h3>
              <h3 class=" uppercase">contact</h3>
            </div>
          </div>

          <div class="flex gap-10 mt-12 md:mt-0">
            <span><i class=" text-white text-2xl"><FaFacebook/></i></span>
            <span><i class=" text-white text-2xl"><FaTwitter/></i></span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsLetter