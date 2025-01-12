'use client'
import React from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { insights } from '@/constants'
import InsightsCard from '@/components/InsightsCard'

const Insights = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}>
                <TypingText title="| Insight" textStyles="text-center" />
                <TitleText title={<>Insight about Metakawa</>} textStyles="text-center" />
                <div className='mt-[50px] flex flex-col gap-[30px]'>
                    {insights.map((insight, index) => (
                        <InsightsCard key={`insight-${index}`} {...insight} index={index + 1} />
                    ))}

                </div>
            </motion.div>
        </section>
    )
}

export default Insights