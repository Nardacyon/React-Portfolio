import React, { Component } from 'react';
import './styles.css';

export default class Navbar extends Component {
    render() {
        return(
            <div className="social">
                <a className="socialsMini" href="https://www.linkedin.com/in/king-t-80834917b/"><i className="fab fa-linkedin-in"></i></a>
                <a className="socialsMini" href="https://github.com/Nardacyon/"><i className="fab fa-github-square"></i></a>
            </div>
        )
    }
}