
'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {  motion } from 'framer-motion';


const HamburgerMenu = ({ isOpen, handleHamburger } : { isOpen: boolean, handleHamburger: () => void }) => {
    const variants = {
        open: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                blur: {
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }
        },
        closed: {
            y: -550,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeInOut",
                blur: {
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }
        }
    }

    const menuvariants = {
        open: {
            x: 0,
            opacity: 1,
        },
        closed: {
            x: -400,
            opacity: 0,
        }
    }

    return (
        <motion.div className='overflow-x-hidden absolute flex flex-col items-center py-[50px] w-full  gap-[48px] -z-20 origin-top bg-slate-800/95 backdrop-blur-2xl h-[520px] top-[0px]'
            variants={variants}
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
        >
            <div></div>
            <div></div>
            <motion.div
                variants={menuvariants}
                transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
            ><Link href="/" className=" text-yellow-50 text-[20px]  " onClick={handleHamburger} >HOME</Link></motion.div>
            <motion.div
                variants={menuvariants}
                transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
            ><Link href="/about-us-page" className="text-yellow-50 text-[20px]" onClick={handleHamburger}>ABOUT US</Link></motion.div>
            <motion.div
                variants={menuvariants}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
            ><Link href="/our-service-useclient" className="text-yellow-50 text-[20px] " onClick={handleHamburger}>SERVICE</Link></motion.div>
            <motion.div
                variants={menuvariants}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            ><Link href="/teams-page" className="text-yellow-50 text-[20px]" onClick={handleHamburger} >TEAMS</Link></motion.div>
        </motion.div >
    )
}



const Navbar: React.FC = () => {
    const [hamburger, setHamburger] = React.useState(false)

    const handleHamburger = () => {
        setHamburger(!hamburger)
    }

    return (
        <nav className="sticky top-0  z-20 bg-white/50 backdrop-blur-sm " >
            <div className='flex justify-between relative w-full '>
                <div className='p-4 flex-1 items-center flex'>
                    <Link href="#" className="flex items-center">
                        <Image
                            src="/logo/formici.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <div className='sm:flex hidden items-center justify-center flex-grow gap-5 '>
                        <motion.div
                            initial={{ size: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        ><Link href="/" className="text-b mx-2 text-slate-900 ">HOME</Link></motion.div>
                        <p>/</p>
                        <motion.div
                            initial={{ size: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        ><Link href="/about-us-page" className="text-slate-900 mx-2">ABOUT US</Link></motion.div>
                        <p>/</p>
                        <motion.div
                            initial={{ size: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        ><Link href="/our-service-useclient" className="text-slate-900 mx-2">SERVICE</Link></motion.div>
                        <p>/</p>
                        <motion.div
                            initial={{ size: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        ><Link href="/teams-page" className="text-slate-900 mx-2">TEAMS</Link></motion.div>
                    </div>
                </div>
                <p className='px-12 sm:block hidden'></p>
                <motion.button className='px-6 sm:hidden block ' onClick={handleHamburger}
                    animate={{
                        scale: hamburger ? 0.75 : 1,
                    }}
                    transition={{ ease: "easeInOut" }}
                >
                    <Image
                        src="/logo/menu.svg"
                        alt="Hamburger"
                        width={30}
                        height={30}
                        className=''
                    />
                </motion.button>
                <HamburgerMenu isOpen={hamburger} handleHamburger={handleHamburger} />
            </div>
        </nav >
    );
};

export default Navbar;