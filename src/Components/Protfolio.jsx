import React from 'react';
import '../styles/Styels.css';

export default function Protfolio() {
    return (
        <div id='main-projects'>
            <div className='projects-title'>
                <h2>Protfolio</h2>
            </div>
            <div id='projects-grid'>
                <div className='singal-project'>
                    <div className='singal-project-columns'>
                        <img src="/dist/assets/Images/project.png" />
                        <h4>Final Project - SmokeEye</h4>
                        <div className='singal-project-btns'>
                            <button>Demo</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                    <p className='bold'>Note: This project is done with a partner</p>
                    <p>This application was born in collaboration with Dr. Yael Bar-Zev from the Israeli Ministry of Health. this app is intended to provide
                        an actual research tool for the benefit of the residents,
                        but in order to develop a systematic and up-to-date
                        information base with geographic segmentation for the
                        benefit of research work and in addition to the work of the
                        enforcement agencies in the city.
                    </p>
                    <p className='gray-p'>technologies including: <br></br> HTML, CSS, Node.js, JavaScript (React.js, React Native), MongoDB.</p>
                </div>
                <div className='singal-project'>
                    <div className='singal-project-columns'>
                        <img src="/src/assets/Images/project.png" />
                        <h4>Authentication Website</h4>
                        <div className='singal-project-btns'>
                            <button>Demo</button>
                            <button>GitHub</button>
                        </div>
                    </div>
                    <p>secure authentication website that allows users to sign up, log in
                        using email and password, and utilize social media login options
                        with Google and Facebook. The project uses a stack of
                    </p>
                    <p className='gray-p'>technologies
                        including: <br></br> HTML, CSS, Node.js, JavaScript (React.js, React Native), MongoDB.</p>
                </div>
            </div>
        </div>
    )
}
