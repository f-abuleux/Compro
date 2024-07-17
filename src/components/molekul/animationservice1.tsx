'use server'

import React from 'react';
import { motion, useViewportScroll, useTransform, } from 'framer-motion';

const AnimationService1 = () => {
        const { scrollYProgress } = useViewportScroll();
        const x = useTransform(scrollYProgress, [0, 0.05], [-850, -700],);

        return (
                <div>
                        <div className='justify-center flex gap-10 h-2 p-5 mb-5' >
                                <motion.div
                                        className='text-[48px] mb-5 font-[NeueMontreal]'
                                        style={{ x }}
                                >VISUALDESIGN|VISUALDESIGN|VISUALDESIGN</motion.div>
                        </div>
                </div>
        );
};

export default AnimationService1;