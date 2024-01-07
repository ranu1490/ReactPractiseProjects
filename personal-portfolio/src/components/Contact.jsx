import React from 'react'
import Resume from '../assets/Resume.pdf'

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="heading">
            <span>Contact</span>
            <hr/>
        </div>
        <div className="info">
            <div className="card">
                <div>
                    <h1>You Need</h1>
                    <p>Beautiful design for your<br/>website leave a request</p>
                </div>
                <div className="arrow">&#x2192;</div>
            </div>
            <div className="card1">
                <button id="resume" className="mail"><a href="mailto:ranusinghrajput75@gmail.com" id="hire_me" target="_top" rel="noopener noreferrer">Coffee with me</a></button>
                <button id="resume"><a href={Resume} download>Resume <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a></button>
            </div>
        </div>
    </section>
  )
}

export default Contact