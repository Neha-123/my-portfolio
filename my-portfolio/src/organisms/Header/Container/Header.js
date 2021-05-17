import React,{useEffect} from 'react'

function Header() {
    
    return (
        <div className='header-container'>
                <span className='header-name'>Neha</span>
                <div className='header-content'>
                    <a href='#home' className='header-items' id='home-link'>Home</a>
                    <a href='#about-background' className='header-items' id='about-link'>About</a>
                    <a href='#resume-container' className='header-items' id='skills-link'>Skills</a>
                    <a href='#experience' className='header-items' id='experience-link'>Experience</a>
                    <a href='#contact-background' className='header-items' id='contact-link'>Contact</a>
                </div>
        </div>
    )
}

export default Header
