import React from "react";
import FetchingServerHome from "../fetching-rendering-home";

export default function AboutushomeComponent() {
      return (
            <div className='justify-center'>
                  <div className='mt-60  sm:mt-48' id='aboutushome' >
                        <FetchingServerHome />
                  </div>
                  <div className="flex justify-center items-center mb-10 ">
                        <div className="max-w-[750px] p-6 text-center  pt-36">
                              <p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]">
                                    <b className='font-bold font-[NeueMontreal]'>Membuka Gerbang Peluang Di era digital </b>ini, kehadiran online merupakan kunci utama untuk menjangkau pelanggan yang lebih luas.
                              </p>
                              <p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]">
                                    <b className='font-bold font-[NeueMontreal]'>Membangun platform digital yang profesional dan user-friendly</b> menjadikan usaha Anda mudah diakses oleh pelanggan dari seluruh dunia.
                              </p>
                              <p className="text-gray-700 p-5 text-[24px] font-[NeueMontreal]">
                                    <b className='font-bold font-[NeueMontreal]'>Meningkatkan kredibilitas dan kepercayaan</b> pelanggan terhadap brand Anda melalui strategi digital yang efektif.
                              </p>
                        </div>
                  </div>
                  <p className='text-[28px] pb-14 pr-10 sm:pr-28 lg:pr-40 font-[NeueMontreal] text-right'>ABOUT US.</p>
            </div>
      )
}