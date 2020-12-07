import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import SocialsHeader from '../../components/SocialsHeader/SocialsHeader'
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