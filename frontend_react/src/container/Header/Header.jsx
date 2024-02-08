import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';




const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',

        }

    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                {/* Above motion.div is used for framer motion. And it is damn cool */}
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span><img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px"></img></span>
                        <div style={{ marginLeft: 10 }}>
                            <p className="p-text">Hi there! I am</p>
                            <h1 className="head-text">Shivam</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <p className="p-text">Software Engineer</p>
                        <p className="p-text">Competitive Coder</p>
                        <p className="p-text">Shopify Developer</p>
                        <p className="p-text">Web Developer</p>
                        {/* <p className="p-text">Digital Marketer</p> */}
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay__circle"
                />


            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.cpp, images.java, images.react, images.python, images.html, images.css, images.javascript].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>

        </div>
    )
}

export default AppWrap(Header, 'home');

// Did this Appwrap wala bakchodi to render header into the App Wrap while using higher order components

// AppWrap is too much important to understand the import HOC
