import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';


import { AppWrap } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//     { title: 'Web Developer', description: 'I am a good web developer', imgUrl: images.about01 },
//     { title: 'Frontend Developer', description: 'I am a good frontend developer', imgUrl: images.about02 },
//     { title: 'Competitive Coder', description: 'I am a good competitive coder', imgUrl: images.about03 },
//     { title: 'Digital Marketer', description: 'I am a good Digital Marketer', imgUrl: images.about04 },
// ]

// Adding sanity client to the server and thus making the about section availble for the backend and adding dynamic data from the backend
const About = () => {
    const [abouts, setAbouts] = useState([]);

    // Create a useEffect to run an effect once the query loads this effect would run 
    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, []);



    return (
        <>
            <h2 className="head-text">
                I know that <span>Good Projects</span> <br /> mean <span>Great Opportunities</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >

                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                        {/* <a href="#" className="btn-text" style={{ marginTop: 20 }}>{about.Url}</a> */}

                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(About, 'about');

// Did this Appwrap wala bakchodi to render header into the App Wrap while using higher order components

// AppWrap is too much important to understand the import HOC