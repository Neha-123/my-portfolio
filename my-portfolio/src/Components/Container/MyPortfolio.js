import React, {useEffect, useState, useRef} from 'react'
import Homepage from '../../organisms/Homepage/Container/Homepage'
import About from '../../organisms/About/Container/About'
import MyResume from '../../organisms/MyResume/Container/MyResume'
import Contact from '../../organisms/Contact/Container/Contact';
import Header from '../../organisms/Header/Container/Header';
import Experience from '../../organisms/Experience/Container/Experience';
import UpArrow from '../../styles/staticAssets/Images/double-up-arrow.svg'

function MyPortfolio() {
    
    const [homepage, isHomepage] =  useState(true);
    
 

    const isInViewport = (el) => {
        
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight) 
    
        );
    }
    const checkHeader = () => {
        const top1 = document.getElementById('about-background').offsetTop;
        const top2 = document.getElementById('resume-container').offsetTop;
        const top3 = document.getElementById('experience').offsetTop;
        const top4 = document.getElementById('contact-background').offsetTop;
        let scrollPos = Math.round(document.documentElement.scrollTop);
        if (scrollPos >= top1 && scrollPos < top2) {
            document.getElementById('about-link').classList.add('active-items');
            document.getElementById('skills-link').classList.remove('active-items');
            document.getElementById('experience-link').classList.remove('active-items');
            document.getElementById('contact-link').classList.remove('active-items');
          } else if (scrollPos >= top2 && scrollPos < top3) {
            document.getElementById('skills-link').classList.add('active-items');
            document.getElementById('about-link').classList.remove('active-items');
            document.getElementById('experience-link').classList.remove('active-items');
            document.getElementById('contact-link').classList.remove('active-items');
          } else if (scrollPos >= top3 && scrollPos < top4) {
            document.getElementById('experience-link').classList.add('active-items');
            document.getElementById('about-link').classList.remove('active-items');
            document.getElementById('skills-link').classList.remove('active-items');
            document.getElementById('contact-link').classList.remove('active-items');
          } else if (scrollPos >= top4) {
            document.getElementById('contact-link').classList.add('active-items');
            document.getElementById('about-link').classList.remove('active-items');
            document.getElementById('skills-link').classList.remove('active-items');
            document.getElementById('experience-link').classList.remove('active-items');
          }
    }

    const checkVisible = () => {
        const homepageSection = document.getElementById('home');
        const profile = isInViewport(homepageSection);
        isHomepage(profile);
        checkHeader();
  
      }

    useEffect(() => {
        document.addEventListener('scroll', checkVisible) ;
        return () => {
            document.removeEventListener('scroll', checkVisible) ;
        }
    }, [])
   
    return (
        <div>
            {homepage ? null : <a href='#home' className='scroll-up'>
                <img src={UpArrow} className='arrow-image' />
                </a>}
            <Homepage id='homepage'  />
            <Header  id='header' />
            <About  id='about' />
            <MyResume  id='resume'  />
            <Experience id='experience' />
            <Contact  id='contact'  />
        </div>
    )
}

export default MyPortfolio
