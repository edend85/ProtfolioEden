import React from 'react';
import '../styles/Styels.css';

/*<hr style={{ borderTop: "1px solid lightgrey", margin: "0 1em" }}></hr> */
export default function AboutMe() {
    return (
        <>
            <div id='main-about'>
                <div id='about'>
                    <h2>
                        About Me
                    </h2>
                </div>
                <div className='self-description'>
                    <br />
                    <p>
                        I graduated as a practical software engineer from Shenkar College of Engineering, Design, and Art in 2024.
                    </p>
                    <br />
                    <p> In the recent decade, I have engaged in diverse roles and responsibilities in the technology sector.
                        <br /> My journey began as a network administrator in the IDF, where I mastered many of the complexities of switches, routers, etc. <br />I eventually assumed a leadership role within the intelligence corps, overseeing the support department. More recently, I have been part of a technical support team within a leading financial institution, where
                        I mastered many aspects of the internal software and its inner integration.
                    </p>
                    <br />
                    <p>
                        Presently, I aim for a professional shift, venturing into software development.
                        My goals involve mastering various
                        software languages, discovering new technologies,
                        and steering projects from inception to fruition.
                    </p>
                    <br />
                    <p>
                        With a proven history of adaptability, team collaboration, and proficiency in
                        addressing technological challenges, I am eager to
                        contribute this wealth of experience to software development.
                    </p>
                </div>
            </div>

        </>

    )
}
