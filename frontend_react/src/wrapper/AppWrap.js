import React from 'react'
import { NavigationDots, SocialMedia } from '../components';

// This is using Higher order components of react which means same data needs not to be repeated again and again and thus we use higher order components of React and here we are using it for height adjustment and Social Media Icons.

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`} >
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">@2022 Shivam</p>
                    <p className="p-text">All rights reserved</p>
                </div>

            </div>
            <NavigationDots active={idName} />
        </ div>
    )
}

export default AppWrap