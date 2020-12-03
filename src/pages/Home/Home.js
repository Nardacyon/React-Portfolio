import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import SocialsHeader from '../SocialsHeader/SocialsHeader'
import './styles.css';

export default class Main extends Component {
    render() {
        return(
            <div className="main">
                <Navbar/>
                <Header/>
                <SocialsHeader/>
            </div>
        )
    }
}