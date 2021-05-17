import React,{useEffect,useState} from 'react'
import location from '../../../styles/staticAssets/Images/location.svg'
import email from '../../../styles/staticAssets/Images/email.svg';
import phone from '../../../styles/staticAssets/Images/phonecall.svg'
function Contact() {
    const [contact, isContact] =  useState(false);
    const isInViewport = (el) => {
        
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= 150 &&
            rect.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight) 
    
        );
    }

    const checkVisible = () => {
        const contactSection = document.getElementById('contact-background');
        const profile = isInViewport(contactSection);
          isContact(profile);
  
      }

    useEffect(() => {
        document.addEventListener('scroll', checkVisible) ;
        return () => {
            document.removeEventListener('scroll', checkVisible) ;
        }
    }, [])

    return (
        <div className='contact-container' id='contact-background'>
            <div className='contact-header'>Contact Us</div>
            <div className='contact-content'>
                <div className='contact-info'>
                    <div className={contact ? 'contact-detail contact-detail-animation':'contact-detail'}>
                        <img src={location} className='icon-image' />
                        <div>
                            <span className='contact-detail-header'>Address</span>
                            <span className='contact-value'>Bengaluru</span>
                        </div>
                        
                    </div>
                    <div className={contact ? 'contact-detail contact-detail-animation':'contact-detail'}>
                        <img src={email} className='icon-image' />
                        <div>
                            <span className='contact-detail-header'>Email</span>
                            <span className='contact-value'>nehasingh@gmail.com</span>
                        </div>
                        
                    </div>
                    <div className={contact ? 'contact-detail contact-detail-animation':'contact-detail'}>
                        <img src={phone} className='icon-image' />
                        <div>
                            <span className='contact-detail-header'>Phone</span>
                            <span className='contact-value'>8717979935</span>
                        </div>
                        
                    </div>
                    
                </div>
                <form className='contact-form'>
                    <div className='contact-email-container'>
                        <input className='contact-name' placeholder='Name' />
                        <input className='contact-email'  placeholder='Email' />
                    </div>
                    <input className='contact-subject'  placeholder='Subject' />
                    <textarea className='contact-message'  placeholder='Message' />
                    <button className='contact-submit'>Send Message</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
