import React from 'react'

const FAQ = () => {
    return (
        <section class="p-20  bg-bookmark-white ">
        <div class="w-11/12 lg:w-2/4 mx-auto flex flex-col items-center">
          <div class="text-center">
            <h1 class="text-3xl text-bookmark-blue mb-6">Frequently Asked Questions</h1>
            <p class="text-md text-bookmark-grey mb-8">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            
          </div>
          <div class="w-full divide-y divide-light-blue-400 mb-8">
            <div class="flex justify-between py-4">
              <h3 class="text-md ">What is a Bookmark?</h3>
              <span><i class="fas fa-chevron-down text-bookmark-purple"></i></span>
            </div>
            <div class="flex justify-between py-4 ">
              <h3 class="text-md ">How can I request a new browser?</h3>
              <span><i class="fas fa-chevron-down text-bookmark-purple" ></i></span>
            </div>
            <div class="flex justify-between py-4">
              <h3 class="text-md ">Is there a mobile app?</h3>
              <span><i class="fas fa-chevron-down text-bookmark-purple"></i></span>
            </div>
            <div class="flex justify-between py-4">
              <h3 class="text-md ">What about other Chromium browsers?</h3>
              <span><i class="fas fa-chevron-down text-bookmark-purple"></i></span>
            </div>
          </div>
          <button class=" text-bookmark-white text-lg  bg-bookmark-purple py-3 px-7 rounded-md text-xs cursor-pointer hover:bg-bookmark-white hover:text-black transition duration-300 capitalize shadow-md">More info</button>

        </div>
      </section>
    )
}

export default FAQ
