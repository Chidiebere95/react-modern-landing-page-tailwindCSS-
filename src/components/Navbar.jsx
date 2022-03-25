import React from 'react'
import logo from '../imgs/logo-bookmark.svg'

const Navbar = () => {
    return (
        <header>
        <nav class="container flex py-4 items-center mt-4 lg:mt-12 ">
          <div class="py-1">
        <img src={logo} alt="logo"/>
          </div>
          <div class="flex-1 flex justify-end text-lg text-bookmark-blue sm:hidden">
            <i class="fas fa-bars"></i>
          </div> 
          <ul class="hidden sm:flex flex-1 justify-end items-center text-bookmark-blue uppercase text-xs">
            <li class="ml-12">Features</li>
            <li class="ml-12">Prices</li>
            <li class="ml-12">contact</li>
            <li class="ml-12  "><button class=" text-bookmark-white bg-bookmark-red py-3 px-7 rounded text-sm uppercase ">login</button></li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar
