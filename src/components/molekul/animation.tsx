"use client"

import React from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform, } from 'framer-motion';

const Animation = () => {
        const { scrollYProgress } = useViewportScroll();
        const x = useTransform(scrollYProgress, [0, 1], [-800, 200],);

        return (
                <div>
                        {/* <Image width={} height={} src={} /> */}
                        <div className='justify-center flex gap-10 h-64 ' >
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                                <motion.img
                                        src="/logo/formici-icon.png"
                                        alt="Image"
                                        style={{ x }}
                                />
                        </div>
                </div>
        );
};

export default Animation;