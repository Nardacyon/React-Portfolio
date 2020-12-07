import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './styles.css'

export default class Contact extends Component {
    render () {
        return (
            <div id="contact-form">
                <Navbar/>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>Email: tingking2019@gmail.com</p>
                    <p>Phone: (619) 436-9832</p>
                    <a href="https://www.linkedin.com/in/king-t-80834917b/" target="_blank" rel="noreferrer nofollow"><i className="fab fa-linkedin-in" id="contact"></i></a>
                    <a href="https://github.com/Nardacyon/" target="_blank" rel="noreferrer nofollow"><i className="fab fa-github-square" id="contact"></i></a>
                </div>
    
            </div>
        )
    }
}