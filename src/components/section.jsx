import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './section.sass'

const Section = ({color, title, subtitle}) => {
    const [ref, inView] = useInView({
        threshold: .25,
      })

    return(
        <motion.section ref={ref} style={{ opacity: inView ? 1 : 0, transition: '1s' }} className={`section section--${color}`}>
            <h2 className="section__title">{title}</h2>
            <h4 className="section__subtitle">{subtitle}</h4>
        </motion.section>
    )
}

export default Section