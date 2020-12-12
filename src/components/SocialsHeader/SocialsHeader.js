import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Navbar extends Component {
    render() {
        return(
            <div className="social">
                <Link className="socialsMini" to="https://www.linkedin.com/in/king-t-80834917b/"><i className="fab fa-linkedin-in"></i></Link>
                <Link className="socialsMini" to="https://github.com/Nardacyon/"><i className="fab fa-github-square"></i></Link>
            </div>
        )
    }
}