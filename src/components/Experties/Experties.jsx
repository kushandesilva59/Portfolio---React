import React from 'react'
import css from './Experties.module.scss'
import { WhatDoIHelp, projectExperience } from '../../utils/data'
import { motion } from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion'


const Experties = () => {
    return (
        <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={css.wrapper}>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>

                <div className={css.leftSide}>

                    {
                        projectExperience.map((exp, index) => {
                            return <motion.div
                            variants={fadeIn("right","tween",(index+1)*0.2,1)}

                            className={css.exp} key={index}>
                                <div className="flexCenter" style={{ background: exp.bg }}>
                                    <exp.icon size={25} color='white' />
                                </div>

                                <div>
                                    <span>{exp.name}</span>

                                    <span className='secondary'>{exp.projects} Projects</span>
                                </div>
                            </motion.div>
                        })
                    }

                </div>

                <motion.div 
                variants={textVariant(0.5)}

                className={css.rightSide}>
                    <span className="primaryText">What do I help?</span>

                    {WhatDoIHelp.map((paragraph, index) => {
                        return <span className='secondaryText' key={index}>{paragraph}</span>
                    })}

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stats}`}>
                            <span className='primaryText'>
                                285+
                            </span>
                            <span className='secondaryText'>
                                Project completed
                            </span>
                        </div>
                        <div className={`flexCenter ${css.stats}`}>
                        <span className='primaryText'>
                               190+
                            </span>
                            <span className='secondaryText'>
                                Happy clients
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Experties