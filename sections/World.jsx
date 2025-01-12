'use client'
import React from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import { TypingText, TitleText } from '@/components/CustomTexts'


const World = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}>
                <TypingText title="| People on the World" textStyles="text-center" />
                <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
                <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className={`relative mt-[68px] flex w-full h-[550px]`}>
                    <img src="/map.png" alt="map" className='w-full h-full object-cover' />
                    <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <img src="/people-01.png" alt="people" className='w-full h-full ' />

                    </div>
                    <div className='absolute top-10 left-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <img src="/people-02.png" alt="people" className='w-full h-full ' />

                    </div>
                    <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <img src="/people-03.png" alt="people" className='w-full h-full ' />
                    </div>
                    <div className='absolute bottom-[35%] left-[23%] w-[196px] h-[150px] p-[6px] rounded-[24px]  bg-[#5d6680] bg-opacity-50 backdrop-blur-[80px]   '>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center justify-center z-0'>
                                <div className='w-[300px] h-[300px] rounded-full gradient-06'></div>
                            </div>
                            <img src="/mapbg-1.png" alt="world" className='w-full h-full' />
                        </div>
                        <div className='absolute bottom-5 left-5  text-[18px] font-bold text-white'>The Upside Down</div>
                        <div className='gradient-04 z-0' />
                    </div>
                    <div className='absolute top-[10%] right-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680] bg-opacity-50 backdrop-blur-[80px] '>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center justify-center z-0'>
                                <div className='w-[300px] h-[300px] rounded-full gradient-06'></div>
                            </div>
                            <img src="/mapbg-2.png" alt="world" className='w-full h-full' />
                        </div>
                        <div className='absolute bottom-5 left-8  text-[18px] font-bold text-white'>Hawkins Labs</div>
                    </div>
                </motion.div>
                <div className='gradient-02 z-0' />
            </motion.div>
        </section>
    )
}

export default World
