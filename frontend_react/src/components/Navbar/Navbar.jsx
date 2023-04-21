import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
// Importing bith Icons and Motion corresponding to the opening and closing of the Hamburger menu


import { images } from '../../constants'; // Follow this to find where images are linked and are being imported from. ie(check -- CONSTANTS )

// Also this import is being done in order to put all the imports one by one to stop and importing all the image data all at once.
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            {/* Bem-Block Element Modifier methods for CSS are used for naming methods in CSS that keeps it organised and in order  */}
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'education', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            {/* Hamburger menu implication for mobile devices. */}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {/* 'true' is used because if we click it we need to open something  */}

                {toggle && (
                    // Using framer motion over here which was imported in line 3 of this file.
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        {/* 'false' is used because if we click it we need to close the menu  */}
                        <ul>
                            {['home', 'about', 'education', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                                <li key={{ item }}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item} </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav >
    )
}

export default Navbar



// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';
// import { images } from '../../constants';
// import './Navbar.scss'

// const Navbar = () => {
//     const [toggle, setToggle] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);

//     const handleDarkMode = () => {
//         setDarkMode(!darkMode);
//     }

//     return (
//         <nav className={`app__navbar ${darkMode ? 'dark' : ''}`}>
//             <div className="app__navbar-logo">
//                 <img src={images.logo} alt="logo" />
//             </div>
//             <ul className="app__navbar-links">
//                 {['home', 'about', 'education', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
//                     <li className="app__flex p-text" key={`link-${item}`}>
//                         <div />
//                         <a href={`#${item}`}>{item}</a>
//                     </li>
//                 ))}
//             </ul>
//             <div className="app__navbar-menu">
//                 <HiMenuAlt4 onClick={() => setToggle(true)} />
//                 {toggle && (
//                     <motion.div
//                         whileInView={{ x: [300, 0] }}
//                         transition={{ duration: 0.85, ease: 'easeOut' }}
//                     >
//                         <HiX onClick={() => setToggle(false)} />
//                         <ul>
//                             {['home', 'about', 'education', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
//                                 <li key={{ item }}>
//                                     <a href={`#${item}`} onClick={() => setToggle(false)}>{item} </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 )}
//             </div>
//             <button onClick={handleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}
//                 <img src="E:\Web Coding Ninja for Internship\Portfolio-2.0\frontend_react\src\assets\moon.png" alt="My Custom Icon" />
//             </button>
//         </nav >
//     )
// }

// export default Navbar



