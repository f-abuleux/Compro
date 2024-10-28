'use client'

import React from "react";
import FetchingServerHome from "../fetching-rendering-home";
import { motion } from 'framer-motion'

export default function AboutushomeComponent() {
      return (
            <div className='justify-center '>
                  <motion.div className='mt-60  sm:mt-48' id='aboutushome'
                        initial={{ opacity: 0, translateY: 20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                  >
                        <FetchingServerHome />
                  </motion.div>
                  <div className="flex justify-center items-center mb-10 ">
                        <div className="max-w-[750px] p-6 text-center  pt-20">
                              <motion.p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]"
                                    initial={{ opacity: 0, translateX: 20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateX: 0 }}
                              >
                                    <b className='font-bold font-[NeueMontreal]'>Membuka Gerbang Peluang Di era digital </b>ini, kehadiran online merupakan kunci utama untuk menjangkau pelanggan yang lebih luas.
                              </motion.p>
                              <motion.p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]"
                                    initial={{ opacity: 0, translateX: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateX: 0 }}
                              >
                                    <b className='font-bold font-[NeueMontreal]'>Membangun platform digital yang profesional dan user-friendly</b> menjadikan usaha Anda mudah diakses oleh pelanggan dari seluruh dunia.
                              </motion.p>
                              <motion.p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]"
                                    initial={{ opacity: 0, translateX: 20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateX: 0 }}
                              >
                                    <b className='font-bold font-[NeueMontreal]'>Meningkatkan kredibilitas dan kepercayaan</b> pelanggan terhadap brand Anda melalui strategi digital yang efektif.
                              </motion.p>
                        </div>
                  </div>
                  <p className='text-[28px] pb-20 pr-10 sm:pr-28 lg:pr-40 font-[NeueMontreal] text-right'>ABOUT US.</p>
            </div>
      )
}