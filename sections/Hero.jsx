'use client'
import React from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '@/utils/motion'

const Hero = () => {
    return (
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <div className='flex items-center flex-col relative z-10'>
                    <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading} >Metakawa</motion.h1>

                </div>
            </motion.div>
        </section>
    )
}

export default Hero