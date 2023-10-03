import React from 'react'
import './Contact.css'
import { ThemeContext } from '../ThemeContext'

export default function Contact() {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div className="contact-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="contact-header"><h1>Contact Me</h1></div>
            <div className="contact-body">
                <div className="contact-element">
                    <div className="element-header"><h2>About me</h2></div>
                    <div className="element-body">
                        <p>Name: <span>Ngo Gia Huan</span></p>
                        <p>Age: <span>20</span></p>
                        <p>Address: <span>Ho Chi Minh City</span></p>
                        <p>University: <span>FPT University</span></p>
                    </div>
                </div>
                <div className="contact-element">
                    <div className="element-header"><h2>Contact</h2></div>
                    <div className="element-body">
                        <p>Email: <span>huanngse171018@fptu.edu.vn</span></p>
                        <p>Phone 1: <span>0911685725</span></p>
                        <p>Phone 2: <span>0815444928</span></p>
                    </div>
                </div>
                <div className="contact-element">
                    <div className="element-header"><h2>Social Media</h2></div>
                    <div className="element-body" id='social-media'> 
                        <p><a href="https://www.facebook.com/huan.gia.69/" target="_blank" id='fblink'><i class="fa-brands fa-facebook"></i></a></p>
                        <p><a href="https://www.instagram.com/ngogia.huan/" target="_blank" id='iglink'><i class="fa-brands fa-instagram"></i></a></p>
                        <p><a href="https://www.linkedin.com/in/huan-ngo-9b0b3b1b2/" target="_blank" id='linkedinlink'><i class="fa-brands fa-linkedin"></i></a></p>
                        <p><a href="https://github.com/ngogiahuan" target="_blank" id='githublink'><i class="fa-brands fa-github"></i></a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
