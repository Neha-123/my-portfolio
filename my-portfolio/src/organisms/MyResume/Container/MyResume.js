import React,{useState, useEffect} from 'react'

export default function MyResume() {

    const [resumeVisible, isResumeVisible] =  useState(false);
    

    const isInViewport = (el) => {
        
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= 150 &&
            rect.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight) 
    
        );
    }

    const checkVisible = () => {
        const resumeSection = document.getElementById('resume-container');
        const resume = isInViewport(resumeSection);
          isResumeVisible(resume);
  
      }

    useEffect(() => {
        document.addEventListener('scroll', checkVisible) ;
        return () => {
            document.removeEventListener('scroll', checkVisible) ;
        }
    }, [])

    return (
        <div className='resume-container' id='resume-container'>
            <div className='resume-header'>Technical Skills</div>
            <div className='resume-content'>
                <div className='progress-container'>
                    <div className='progress-bar'>
                        <div className='progress-bar-header'>
                            <span>HTML</span><span>75%</span>
                        </div>
                        <div className='progress'>
                            <div className={resumeVisible ? 'progress-value html' : 'progress-value'}></div>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div  className='progress-bar-header'>
                            <span>CSS</span><span>90%</span>
                        </div>
                        <div className='progress'>
                            <div className={resumeVisible ? 'progress-value css' : 'progress-value'}></div>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div  className='progress-bar-header'>
                            <span>Javascript</span><span>80%</span>
                        </div>
                        <div className='progress'>
                            <div className={resumeVisible ? 'progress-value javascript' : 'progress-value'}></div>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div  className='progress-bar-header'>
                            <span>React</span><span>90%</span>
                        </div>
                        <div className='progress'>
                            <div className={resumeVisible ? 'progress-value react' : 'progress-value'}></div>
                        </div>
                    </div>
                    
                </div>
                <div className='skill-container'>
                    {[{key:'Dev ops', value:'JiRA'},
                    {key:'ramework/Library', value:'React JS, Redux JS, Redux-Thunk, Pure-CSS, Material-UI'},
                    {key:'Web Style/Animation', value:'Styled-component, CSS'},                    
                    {key:'Version Control Tool ', value:'GITHUB, GITLAB'},
                    {key:'Programming Languages', value:'JavaScript'},
                    {key:'Operating System', value:'Windows'}
                ].map(item => {
                    return <div className='skill-content'>
                                <div className='skill-key'>{item.key}</div>
                                <div className='skill-value'>{item.value}</div>
                            </div>
                })}
                </div>
            </div>
        </div>
    )
}
