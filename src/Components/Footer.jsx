import React from 'react'
import MailIcon from '../assets/Images/icons8-gmail-mail.svg'
import WhatAppIcon from '../assets/Images/icons-whatsapp.svg'

export default function Footer() {
    return (
        <div id='footer'>
            <div className='contact'>
                <p>Contact Me</p>
                <div>
                    <button>
                        <a href="mailto:eden8557021@gmail.com">
                            <img src={MailIcon} />
                        </a>
                    </button>
                    <button>
                        <a href="https://wa.me/972526211386" >
                            <img src={WhatAppIcon} />
                        </a>
                    </button>
                </div>
                <div className='rights'>
                    <p>Created by Eden Dayan</p>
                </div>
            </div>
        </div>
    )
}
