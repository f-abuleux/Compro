import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroGue() {
      return (
            <div className=' overflow-x-clip items-center '>
                  <div className=" flex-row lg:h-screen h-[100vh] sm:h-89 sm:mx-[150px] : lg:mx-[350px] mt-[10px] items-center ">
                        <div className=" text-center justify-center ">
                              <p className='font-[NeueMontreal] p-10 mt-16 '>WELCOME TO</p>
                              <div className="">
                                    <div className="flex justify-center">
                                          <Image
                                                className='p-7'
                                                src="/logo/formici.svg" alt="hero"
                                                width={200}
                                                height={500}
                                          />
                                    </div>
                              </div>
                              <p className='p-5 font-[Meditative] text-[32px] justify-center'>DIGITALISASI SERTA MEMPERLUAS JARINGAN DENGAN MEMPERKANALAN “ART” YANG ANDA MILIKI KE DUNIA DIGITAL.</p>
                              <p className='font-[NeueMontreal] mt-[20px] mb-[64px] p-5'>DIGITILIZE YOUR “ART” AND LET THE WORLD SEE YOU</p>
                              <div className='mt-32'>
                                    <Link href="#aboutushome" className='
            bg-slate-800 p-5 rounded-[28px] font-[NeueMontreal] text-yellow-50 hover:bg-yellow-50 hover:text-slate-800 duration-500 ease-in-out  '>START YOUR JOURNEY</Link>
                              </div>
                        </div>
                  </div>
            </div>
      )
}