import React from 'react';
import '../styles/Styels.css';
import PrjIcon from '../assets/Images/project.png';
import PrjList from '../Data/Projects.json';

/* 
<div className='singal-project'>
                    <div className='singal-project-columns'>
                        <img src={PrjIcon} />
                        <h4>Final Project - SmokeEye</h4>
                        <div className='singal-project-btns'>
                            <button><a href=""></a>Demo</button>
                            <button><a href=""></a>GitHub</button>
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
                        <img src={PrjIcon} />
                        <h4>Authentication Website</h4>
                        <div className='singal-project-btns'>
                            <button><a href="https://authentication-zi9e.onrender.com"></a>Demo</button>
                            <button><a href=""></a>GitHub</button>
                        </div>
                    </div>
                    <p>secure authentication website that allows users to sign up, log in
                        using email and password, and utilize social media login options
                        with Google and Facebook. The project uses a stack of
                    </p>
                    <p className='gray-p'>technologies including: <br></br> HTML, CSS, Node.js, JavaScript (React.js, React Native), MongoDB.</p>
                </div>
*/

export default function Protfolio() {
    return (
        <div id='main-projects'>
            <div className='projects-title'>
                <h2>Protfolio</h2>
            </div>
            <div id='projects-grid'>
                {
                    PrjList.map((Prj, index) => {
                        return (
                            <div className='singal-project' key={index}>
                                <div className='singal-project-columns'>
                                    <img src={PrjIcon} />
                                    <h4>{Prj.prjtitle}</h4>
                                    <div className='singal-project-btns'>
                                        <button><a href={Prj.prjdemolink}></a>Demo</button>
                                        <button><a href={Prj.prjgithublink}></a>GitHub</button>
                                    </div>
                                </div>
                                <p className='note'>{Prj.note}</p>
                                <p>{Prj.prjdescription}</p>
                                <p className='gray-p'>technologies including: <br></br>{Prj.prjtechnologies}</p>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}
