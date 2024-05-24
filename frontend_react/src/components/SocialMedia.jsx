import React from 'react'
import { BsGithub, BsTwitter, BsFileCode } from 'react-icons/bs';
import { FaLinkedin, FaFile } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/shivamjha2712/">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href="https://github.com/shivam-jha2712">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1wT9ow-26SO676T1pMgvXQBh5LRas2EeM/view?usp=sharing">
                    <FaFile />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/Shivamj23174085">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://linktr.ee/shivamjha2712">
                    <BsFileCode />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia