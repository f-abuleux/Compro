'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

async function getData() {
      const response = await fetch('https://cdn.contentful.com/spaces/cbvu2jwtumbq/environments/master/entries?access_token=SuzRdqXHbxJuPajgxaJu0FL3V0OJLWCy84fsU1KErbM', {
            method: "GET",
            cache: "force-cache"
      },);
      if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
      }
      const jsonData = response.json();
      return jsonData;
}


export default async function OurServicePage() {
      const repo = await getData();
      // console.log(jsonData.items[0].fields.slug)

      // const variants = {
      //       whileHover: {
      //             scale: 1.1,
      //             transition: {
      //                   duration: 0.5,
      //                   yoyo: Infinity
      //             }
      //       }
      //       while
      // }


      return (
            <div className="p-5 gap-5 overflow-x-clip" id='our-service-page'>
                  <h1 className='text-[48px] text-left m-5 pl-20 font-[NeueMontreal]' id='/#service-servicepage'>SERVICE</h1>
                  <p className='text-center p-5 font-[NeueMontreal]'>Semua kebutuhan digital Anda terpenuhi di sini</p>
                  <div>
                        <div className='grid grid-cols-3 gap-5 items-center justify-center place-content-center m-20' id='webdevelopment-servicepage'>
                              <div className='flex justify-end'>
                                    <img src="/image/formicingoding.png"
                                          className='rounded-[10px] '
                                          width={400}
                                          height={500}
                                          alt="" />
                              </div>
                              <div className='p-5'>
                                    <p className='text-[28px] text-center p-5 font-[NeueMontreal]' >Web Development</p>
                                    <p className='text-[16px] p-5 text-center font-[NeueMontreal]'>Bangun situs web yang interaktif mewakili layanan web development untuk membuat situs web yang fungsional, mudah digunakan, dan sesuai dengan kebutuhan Anda.</p>
                              </div>
                              <motion.div className='origin-left'
                                    initial={{ scale: 1, }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    whileHover={{ scale: 1.01, }}
                                    whileTap={{ scale: 0.95, }}
                              >
                                    <Link href={`/servicepage/${repo.items[0].fields.slug}`}
                                          className='bg-slate-800 text-yellow-50 rounded-[32px] py-5 px-10 font-[NeueMontreal] origin-center hover:bg-yellow-50 hover:text-slate-800 ease-in-out duration-300'
                                    >MORE THOUGHT</Link>
                              </motion.div>
                        </div>
                        <div className='grid grid-cols-3 gap-5 items-center justify-center place-content-center m-20' id='brandidentity-servicepage'>
                              <div className='flex justify-end'>
                                    <img src='/image/brandidentity.png'
                                          className='rounded-[10px] '
                                          width={400}
                                          height={500}
                                          alt="" />
                              </div>
                              <div className='p-5'>
                                    <p className='text-[28px] text-center p-5 font-[NeueMontreal]' >Brand Identitiy</p>
                                    <p className='text-[16px] p-5 text-center font-[NeueMontreal]'>Temukan identitas brand yang unik dan konsisten dan solusi visual design yang profesional menekankan pada pentingnya desain visual dalam membangun brand identity yang kuat.
                                    </p>
                              </div>
                              <div>
                                    <Link href={`/servicepage/${repo.items[3].fields.slug}`}
                                          className='bg-slate-800 text-yellow-50 rounded-[32px] py-5 px-10 text-[NeueMontreal] '
                                    >MORE THOUGHT</Link>
                              </div>
                        </div>
                        <div className='grid grid-cols-3 gap-5 items-center justify-center place-content-center m-20' id='visualdesign-servicepage'>
                              <div className='flex justify-end'>
                                    <img src="https://miro.medium.com/v2/resize:fit:1024/1*WI-1j92eWvtYSUfTvi7VBw.png"
                                          className='rounded-[10px] '
                                          width={400}
                                          height={500}
                                          alt="" />
                              </div>
                              <div className='p-5'>
                                    <p className='text-[28px] text-center p-5 font-[NeueMontreal]' >Visual Design</p>
                                    <p className='text-[16px] p-5 text-center font-[NeueMontreal]'>Wujudkan identitas brand yang kuat menunjukkan layanan visual design untuk membantu membangun identitas brand yang unik dan konsisten melalui logo, desain web, dan materi visual lainnya.</p>
                              </div>
                              <div>
                                    <Link href={`/servicepage/${repo.items[2].fields.slug}`}>More Thought</Link>
                              </div>
                        </div>
                        <div className='grid grid-cols-3 gap-5 items-center justify-center place-content-center m-20' id='photography-servicepage'>
                              <div className='flex justify-end '>
                                    <img src="https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg"
                                          className='rounded-[10px] '
                                          width={400}
                                          height={500}
                                          alt="" />
                              </div>
                              <div className='p-5'>
                                    <p className='text-[28px] text-center p-5 font-[NeueMontreal]' >Photography Videography</p>
                                    <p className='text-[16px] p-5 text-center font-[NeueMontreal]'>Abadikan momen spesial dan ciptakan visual memukau mencakup layanan fotografi dan videografi untuk mengabadikan momen penting, menceritakan kisah melalui video, dan menghasilkan konten visual yang menarik.</p>
                              </div>
                              <div>
                                    <Link href={`/servicepage/${repo.items[1].fields.slug}`}>More Thought</Link>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
