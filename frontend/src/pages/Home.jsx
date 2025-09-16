import React from 'react'
import HeroSection from '../components/home/HeroSection';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main>
        
        <HeroSection />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
      </main>
  )
}

export default Home