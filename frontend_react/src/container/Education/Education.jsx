import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Education.scss';
const Eduskills = () => {

    const [experiencesedu, setExperiencesedu] = useState([]);
    const [eduskills, setEduskills] = useState([]);

    // UseEffect is responsible  for creating and fetching data from the sanity CMS
    useEffect(() => {
        const query = '*[_type == "experiencesedu"]';
        const eduskillsQuery = '*[_type == "eduskills"]';

        client.fetch(query).then((data) => {
            setExperiencesedu(data);
        });

        client.fetch(eduskillsQuery).then((data) => {
            setEduskills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Educational Information</h2>
            <div className="app__Eduskills-container">
                <motion.div className="app__Eduskills-list">
                    {eduskills?.map((eduskills) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__Eduskills-item app__flex"
                            key={eduskills.name}
                        >
                            <div className="app__flex" style={{ backgroundColor: eduskills.bgColor }}>
                                <img src={urlFor(eduskills.icon)} alt={eduskills.name} />
                            </div>
                            <p className="p-text">{eduskills.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__Eduskills-exp">
                    {experiencesedu?.map((experience) => (
                        <motion.div className="app__Eduskills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__Eduskills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__Eduskills-exp-works">
                                {experience.edu.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__Eduskills-exp-work"
                                            data-tip // This for ToolTip Creation
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <h4 className="p-text">{work.institute}</h4>
                                        </motion.div>

                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor='#fff'
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(Eduskills, 'eduskills');
// export default AppWrap(
//     MotionWrap(Eduskills, 'app__eduskills'),
//     'eduskills',
//     "app__primarybg"
// );


// Did this Appwrap wala bakchodi to render header into the App Wrap while using higher order components

// AppWrap is too much important to understand the import HOC