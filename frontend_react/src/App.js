import React, { useState, useEffect } from 'react';

import { About, Education, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components';
import './App.scss';
const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Education />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;