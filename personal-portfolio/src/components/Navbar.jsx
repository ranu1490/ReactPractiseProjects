import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
        <a href="">RANU.</a>
    </div>
    <div className="menu">
        <button>&#x2630;</button>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="#skill">SKILLS</a></li>
            <li><a href="#work">WORKS</a></li>
            <li><a href="#expirence">EXPIRENCE</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="mailto:ranusinghrajput75@gmail.com" id="hire_me" target="_top" rel="noopener noreferrer">Hire Me</a></li>
          </ul>
    </div>
    </nav>
  )
}

export default Navbar