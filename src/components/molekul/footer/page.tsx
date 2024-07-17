"use client"

import Image from "next/image";
import { motion } from "framer-motion";


const FooterHomePage = () => {
        return (
                <div className="">
                        <div className="flex-col sm:flex-row sm:flex gap-[15px] lg:gap-[80px]  sm:gap-[20px] text-center font-[NeueMontreal] items-center  justify-center mt-[100px] text-slate-800 font-bold ">
                                <motion.div className="flex justify-center sm:hidden"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >
                                        <Image src="/logo/formici.svg" alt=""
                                                width={150}
                                                height={100}
                                        />
                                </motion.div>
                                <motion.a href="https://www.behance.net/farosabdillah"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >BEHANCE</motion.a>
                                <motion.div>EMAIL</motion.div>
                                <motion.a href="https://www.linkedin.com/in/mfarraosabdillah/"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >LINKED</motion.a>
                                <Image src="/logo/formici.svg" alt=""
                                        width={150}
                                        height={100}
                                        className="flex  justify-center sm:visible invisible"
                                />
                                <motion.a href="https://www.instagram.com/m.farraos/"
                                className="flex justify-center"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >INSTAGRAM</motion.a>
                                <motion.a href="https://discord.com/users/333825723297038338"
                                className="flex justify-center"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >DISCORD</motion.a>
                                <motion.a href="https://github.com/f-abuleux"
                                className="flex justify-center"
                                        initial={{ scale: 1 }}
                                        whileTap={{ scale: 0.9 }}
                                >GITHUB</motion.a>
                        </div>
                        <p className="text-center font-[NeueMontreal] mt-[50px] sm:mb-[50px] p-10">DESIGNED BY FORKAA @ 2024 VOLUME2</p>
                </div>
        );
}

export default FooterHomePage;