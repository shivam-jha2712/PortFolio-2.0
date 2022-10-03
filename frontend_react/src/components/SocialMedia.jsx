import React from 'react'
import { BsGithub, BsTwitter, BsFile } from 'react-icons/bs';
import { FaLinkedin, FaFile } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <FaLinkedin />
            </div>
            <div>
                <BsGithub />
            </div>
            <div>
                <FaFile />
            </div>
            <div>
                <BsTwitter />
            </div>
        </div>
    )
}

export default SocialMedia