import React from 'react'

import { images } from '../../constants'; // Follow this to find where images are linked and are being imported from. ie(check -- CONSTANTS )

// Also this import is being done in order to put all the imports one by one to stop and importing all the iimage data all at once.
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={images.logo} alt="logo" />
            </div>
            <ul>
                {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => (
                    <li key={`link-${item.id}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar