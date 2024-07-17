'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroGue() {
      return (
            <div className=' overflow-x-clip items-center '>
                  <div className=" flex-row lg:h-screen h-[100vh] sm:h-89 sm:mx-[150px] : lg:mx-[350px] mt-[10px] items-center ">
                        <div className=" text-center justify-center ">
                              <motion.p className='font-[NeueMontreal] p-10 mt-16'
                                    initial={{ opacity: 0, translateY: 20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateY: 0 }}
                              >WELCOME TO</motion.p>
                              <motion.div className=""
                                    initial={{ opacity: 0, translateY: 20 }}
                                    transition={{ duration: 0.75, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateY: 0 }}>
                                    <div className="flex justify-center"
                                    >
                                          <Image
                                                className='p-7'
                                                src="/logo/formici.svg" alt="hero"
                                                width={200}
                                                height={500}
                                          />
                                    </div>
                              </motion.div>
                              <motion.p className='p-5 font-[Meditative] text-[32px] justify-center'
                                    initial={{ opacity: 0, translateY: 20 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateY: 0 }}
                              >DIGITALISASI SERTA MEMPERLUAS JARINGAN DENGAN MEMPERKANALAN “ART” YANG ANDA MILIKI KE DUNIA DIGITAL.</motion.p>
                              <motion.p className='font-[NeueMontreal] mt-[20px] mb-[64px] p-5'
                                    initial={{ opacity: 0, translateY: 20 }}
                                    transition={{ duration: 1.25, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateY: 0 }}
                              >DIGITILIZE YOUR “ART” AND LET THE WORLD SEE YOU</motion.p>
                              <motion.div className='mt-32'
                                    initial={{ opacity: 0, translateY: 20 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    whileInView={{ opacity: 1, translateY: 0 }}
                              >
                                    <Link href="#aboutushome" className='
            bg-slate-800 p-5 rounded-[28px] font-[NeueMontreal] text-yellow-50 hover:bg-yellow-50 hover:text-slate-800 duration-500 ease-in-out  '>START YOUR JOURNEY</Link>
                              </motion.div>
                        </div>
                  </div>
            </div>
      )
}