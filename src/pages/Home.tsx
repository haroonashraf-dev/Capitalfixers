import React from 'react';
import Hero from '../components/sections/Hero';
import CategoriesSection from '../components/sections/CategoriesSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProcessSection from '../components/sections/ProcessSection';
import AreasSection from '../components/sections/AreasSection';
import Testimonials from '../components/sections/Testimonials';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <WhyChooseUs />
      {/* <ProcessSection /> */}
      <AreasSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}
