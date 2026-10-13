import React from 'react';

const NavigationDots = ({ active }) => (
    <div className="app__navigation">
        {['home', 'about', 'education', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                aria-label={`Go to ${item} section`}
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            >
                <span className="app__navigation-label">{item}</span>
            </a>
        ))}
    </div>
);

export default NavigationDots;