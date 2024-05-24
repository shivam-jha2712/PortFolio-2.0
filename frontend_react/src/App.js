import React from 'react';
// import React, { useState, useEffect } from 'react';
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import { About, Education, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components';
import './App.scss';
const App = () => {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 8000)
    // }, [])

    return (
        <div className="app">
            {/* {
                loading ?
                    <ClimbingBoxLoader color={"#000000"} loading={loading} size={30} />
                    :
                    <><Navbar /><Header /><About /><Education /><Work /><Skills /><Testimonial /><Footer /></>
            } */
            }

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