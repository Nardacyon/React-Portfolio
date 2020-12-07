import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
    render() {
        return(
            <div className="name">
                <p>Hello World!</p>

                <h1>My name is King</h1>

                <p className="details">This portfolio web site was created to show my interests in computer programming. In this demonstration I will be focusing on what I am working on now, web development. Web development is the first step I want to take in the world of computer programming and this portfolio is intended to show my growth and experience in the field after only 2 months.</p>
            
                <a href="/react-portfolio/about" className="started-btn">Let's Get Started</a>
            </div>
        )
    }
}