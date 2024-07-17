'use client'

import CardProduct from '../../../components/molekul/card';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProductLayananHome() {
      return (
            <div className="">
                  <p className="flex text-left pl-10 sm:pl-28 lg:pl-40 mt-40 mb-10 text-[28px] font-[NeueMontreal] ">FEATURED SERVICE</p>
                  <motion.div className="flex flex-col sm:flex-row sm:flex-wrap gap-[48px] justify-center items-center p-6 mb-40 "
                        initial={{ opacity: 0, translateY: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                  >
                        <CardProduct number="01." desc="Visual Design service adalah desain dalam platform apapun sesuai dengan ranahmu." page="our-service-useclient/#visualdesign-servicepage" name="Visual Design" />
                        <CardProduct number="02." desc="Brain Identity membantu memperkenalkan / membangun identitas dari usahamu." page="our-service-useclient/#brainidentity-servicepage" name="Brand Indentity" />
                        <CardProduct number="03." desc="Web Development membangun platform digital mu secara online." page="our-service-useclient/#webdevelopment-servicepage" name="Web Development" />
                        <CardProduct number="04." desc="Photography Videography memberikan visual yang estetik terhadap usahamu" page="our-service-useclient/#photography-servicepage" name="Photography  Videography" />
                  </motion.div>
            </div>
      )
}