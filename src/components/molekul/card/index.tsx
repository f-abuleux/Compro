"use client"

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


interface Product {
        number: string,
        desc: string,
        name: string,
        page: string
}

interface RadioButton {
        pertanyaan: string,
        a: string,
        b: string
}


export const RadioButton = ({ pertanyaan, a, b }: RadioButton) => {
        return (
                <div>
                        <section>
                                <p>{pertanyaan}</p>
                                <div>
                                        <input type="radio" name="" id="" >{a}</input>
                                        <input type="radio" name="" id="" >{b}</input>
                                </div>
                        </section>
                </div>
        )
}

const CardProduct = ({ number, desc, page, name }: Product) => {
        const router = useRouter();

        return (
                <div className="flex justify-center">
                        <motion.div className=" rounded-[40px] bg-repeat-round  bg-white/50  w-[300px] gap-5 p-6 mb-8  h-[350px] border-[1px]  border-slate-800 backdrop-blur-sm"
                                initial={{
                                        scale: 1,
                                }}
                                transition={{
                                        ease: "easeInOut",
                                        duration: 0.2
                                }}
                                whileHover={{
                                        scale: 1.01,
                                }}>
                                <p className="font-[NeueMontreal] p-3 text-[28px]  text-yellow-50 w-16 rounded-[50%] bg-slate-800 ">{number}</p>
                                <p className="h-[20px] w-[245px] pt-[15px] font-[NeueMontreal] hover:">{desc}</p>
                                <div className="pt-[155px] ">
                                        <motion.button className="text-center flex  justify-center items-center mx-auto w-[255px] bg-slate-800 h-[60px] px-[10px] rounded-[50px]  text-yellow-50 font-[NeueMontreal]" onClick={() => router.push(`/${page}`)}
                                                initial={{
                                                        scale: 1,
                                                }}
                                                transition={{
                                                        ease: "easeInOut",
                                                        duration: 0.2
                                                }}
                                                whileHover={{
                                                        scale: 1.02,
                                                }}
                                        >
                                                {name}
                                        </motion.button>
                                </div>
                        </motion.div>
                </div >
        )
}

export default CardProduct