import React, {useEffect, useState} from 'react'
import profileImage from '../../../styles/staticAssets/Images/profile.jpg'
const About = (props) => {
    const {isVisible } = props;
    const [about, isAbout] =  useState(false);
    
 

    const isInViewport = (el) => {
        
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= 150 &&
            rect.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight) 
    
        );
    }

    const checkVisible = () => {
        const aboutSection = document.getElementById('about-background');
        const profile = isInViewport(aboutSection);
          isAbout(profile);
  
      }

    useEffect(() => {
        document.addEventListener('scroll', checkVisible) ;
        return () => {
            document.removeEventListener('scroll', checkVisible) ;
        }
    }, [])

    return (
        <div className = 'about-background' id='about-background'>
            <div className='about-header'>About me</div>
            <div className='profile-container' id='profile-container'>
                <img src={profileImage} className={about ? 'profile-image profile-image-animation': 'profile-image'} />
                <div className={about ? 'profile-content profile-content-animation': 'profile-content'} >
                {
                    [{key:'Name', value:'Neha Singh'},
                    {key:'Email', value:'nehasingh1252@gmail.com'},
                    {key:'Phone', value:'8717979935'},
                    {key:'Date of Birth', value:'10 Dec 1993'}].map( item => {
                        return <div className='about-content'>
                                <span className='about-key'>{item.key}</span>
                                <span className='about-value'>{item.value}</span>
                            </div>
                    })
                }
                <div className='about-profile'>Profile</div>
                <div className='about-profile-content'>Front End Developer with an experience in React JS with Redux to build single page applications. Good 
                    exposure to frameworks like Material UI. Experience in NoSQL Database like MongoDB/Mongoose to 
                    build CRUD applications
                </div>
                </div>
            </div>
            <button className={about ? 'download-resume download-animation' : 'download-resume'}>Download Resume</button>
        </div>
    )
}

export default About
