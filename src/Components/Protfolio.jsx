import React from 'react';
import '../styles/Styels.css';
import PrjIcon from '../assets/Images/project.png';
import PrjList from '../Data/Projects.json';


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
                                        <button><a href={Prj.prjdemolink}>Demo</a></button>
                                        <button><a href={Prj.prjgithublink}>GitHub</a></button>
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
