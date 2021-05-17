import React from 'react'
import ProjectOne from '../../../styles/staticAssets/Images/project_one.jpg';
import ProjectTwo from '../../../styles/staticAssets/Images/project_two.jpg';
import ProjectThree from '../../../styles/staticAssets/Images/project_three.jpg';

function Experience() {
    return (
        <div className='experience-background' id='experience'>
            <div className='experience-header'>Experience</div>
            <div className='experience-box'>
                <div className='experience-container'>
                    <img className='experience-image' src={ProjectOne} />
                    <div className='experience-content'>
                        <span className='experience-year'>APRIL 2020 – Till Date</span>
                        <span className='experience-details'>COMPANY: COGNIZANT</span>
                        <span className='experience-details'>CLIENT NAME: HCSC, USA</span>
                        <span className='experience-details'>PROJECT NAME: LIMITLESS</span>
                        <span className='view-button'>View More</span>
                    </div>
                </div>
                <div className='experience-container'>
                    <img className='experience-image' src={ProjectTwo} />
                    <div className='experience-content'>
                        <span className='experience-year'>OCT 2018 – APRIL 2020</span>
                        <span className='experience-details'>COMPANY: COGNIZANT</span>
                        <span className='experience-details'>CLIENT NAME: Academy Sports and Outdoors, USA</span>
                        <span className='experience-details'>PROJECT NAME: Academy</span>
                        <span className='view-button'>View More</span>
                    </div>
                </div>
                <div className='experience-container'>
                    <img className='experience-image' src={ProjectThree} />
                    <div className='experience-content' >
                        <span className='experience-year' >FEB 2017 – OCT 2018</span>
                        <span className='experience-details'>COMPANY: COGNIZANT</span>
                        <span className='experience-details'>CLIENT NAME: Academy Sports and Outdoors, USA</span>
                        <span className='experience-details'>PROJECT NAME: Nexus Support</span>
                        <span className='view-button'>View More</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience
