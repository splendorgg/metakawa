'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import styles from '@/styles'
const Navbar = () => {
    return (
        <motion.nav variants={navVariants} initial='hidden' whileInView='show' className={`${styles.xPaddings} py-8 relative`} >
            <div className='absolute w-[50%] inset-0 gradient-01' />
        </motion.nav>
    )
}

export default Navbar