'use client'

import React from 'react';
import Animation from '@/components/molekul/animation';
import Hero from '../components/atom/Hero';
import AboutUsHome from '../components/atom/AboutComponent';
import ProductLayananHome from '../components/atom/ProductLayananComponent';
import TestimoniHome from '../components/atom/TestimoniComponent';


const HomePage: React.FC = () => {
  return (
    <div className=' overflow-x-clip items-center '>
        <Hero />
        <AboutUsHome />
        <ProductLayananHome />
        <Animation />
        <TestimoniHome />
    </div>
  );
};

export default HomePage;