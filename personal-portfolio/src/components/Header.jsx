import React from 'react'
import Resume from '../assets/Resume.pdf'

const Header = () => {
  return (
    <header id="home" className="home">
    <div className="name">
        <h1>Hello,</h1>
        <h2>I'M Ranu Kumari</h2>
        <p>Web Designer & Developer</p>
        <p id="about">I'm a Software Engineer and Enthusiastic Learner. Interested in Full-Stack Development. looking to collaborate with other Designer and Developer</p>
        <a href={Resume} download>
        <button id="resume">Resume <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
        </a>
    </div>
    <div className="img"></div>
    </header>
  )
}

export default Header