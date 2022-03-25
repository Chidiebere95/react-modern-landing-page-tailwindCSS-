import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Downloads from '../components/Downloads'
import FAQ from '../components/FAQ'
import Newsletter from '../components/NewsLetter'

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Features/>
            <Downloads/>
            <FAQ/>
            <Newsletter/>
        </div>
    )
}

export default Home
