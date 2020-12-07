import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './styles.css';

export default class About extends Component {
    render() {
        return(
            <div className="about">
            <Navbar/>
                <div className="about-text">
                    <h1>About Me</h1>
                    <h2>Full Stack Developer</h2>
                    <p>I am a full stack developer. I believe that my strongest suit is building the interface that people look at. I want to create products that pull in users and engage them with aesthetics and that make their online experience good. My projects are meant to be convenient and useful so that users can rely on them at any given moment, while also improving the product overtime. Scroll down to check out the sites I've made.</p>
                </div>
                <div class="about-model"></div>
            </div>
        )
    }
}