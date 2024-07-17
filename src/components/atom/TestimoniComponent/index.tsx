

import React from "react"
import FetchingServerAboutus from "../fetching-rendering-aboutus"


export default function TestimoniComponent() {
      return (
            <div className='mb-40  '>
                  <p className='text-left pl-10 sm:pl-28 lg:pl-40 text-[28px] font-[NeueMontreal] mb-10 mt-28'>CLIENT SAY.</p>
                  <div className='flex flex-col lg:flex-row justify-center items-center m-5  lg:m-12 p-5 gap-20'>
                        <div className='w-[275px] sm:w-[550px] lg:w-[300px]'>
                              <FetchingServerAboutus />
                              <div className='text-[14px] sm:text-[16px] lg:text-[20px] font-[NeueMontreal] border-l-[1px] border-l-slate-800 p-2'>
                                    Menurut saya ini sangat mantap sekali, hasil yang diberikan tidak kidding-kidding sesuai dengan harapan, tidak salah mengapa orang merekomendasikan untuk selalu kesini
                              </div>
                        </div>
                        <div className='w-[275px] sm:w-[550px] lg:w-[300px]'>
                              <FetchingServerAboutus />
                              <div
                                    className='text-[14px] sm:text-[16px] lg:text-[20px] font-[NeueMontreal] border-l-[1px] border-l-slate-800 p-2'>
                                    Menurut saya ini sangat mantap sekali, hasil yang diberikan tidak kidding-kidding sesuai dengan harapan, tidak salah mengapa orang merekomendasikan untuk selalu kesini
                              </div>
                        </div>
                        <div className='w-[275px] sm:w-[550px] lg:w-[300px]'>
                              <FetchingServerAboutus />
                              <div
                                    className='text-[14px] sm:text-[16px] lg:text-[20px] font-[NeueMontreal] border-l-[1px] border-l-slate-800 p-2'>
                                    Menurut saya ini sangat mantap sekali, hasil yang diberikan tidak kidding-kidding sesuai dengan harapan, tidak salah mengapa orang merekomendasikan untuk selalu kesini
                              </div>
                        </div>
                  </div>
            </div>


      )
}