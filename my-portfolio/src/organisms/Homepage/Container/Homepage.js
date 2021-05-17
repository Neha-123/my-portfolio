import React,{useState, useEffect} from 'react'
import Background from '../../../styles/staticAssets/Images/portfolioBackground.jpg'
function Homepage() {
    

    return (
        <div id='home'>
            <img src={Background} className='portfolio-background'  />
            <div className='background-content'>
                <span className='line-one'>Hello, I'm</span>
                <span className='line-two'>Neha Singh</span>
                <span className='line-three'>React Developer</span>
            </div>
            
        </div>
    )
}

export default Homepage
