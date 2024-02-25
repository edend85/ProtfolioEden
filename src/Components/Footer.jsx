import React from 'react'

export default function Footer() {
    return (
        <div id='footer'>
            <div className='contact'>
                <p>Contact Me</p>
                <div>
                    <button>
                        <a href="mailto:eden8557021@gmail.com">
                            <img src="/src/assets/Images/icons8-gmail-mail.svg" />
                        </a>
                    </button>
                    <button>
                        <a href="https://wa.me/972526211386" >
                            <img src="/src/assets/Images/icons-whatsapp.svg" />
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
