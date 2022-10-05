import React from 'react'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
const Footer = () => {
    return (
        <div>Footer</div>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'footer',
    "app__primarybg"
);


// Did this Appwrap wala bakchodi to render header into the App Wrap while using higher order components

// AppWrap is too much important to understand the import HOC