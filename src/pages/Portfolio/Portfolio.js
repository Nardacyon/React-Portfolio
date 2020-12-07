import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './styles.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <Navbar/>
                <h1 class="p-heading">Portfolio</h1>
                <p class="p-desc">Click the Headers to try out the apps</p>
                <div class="p-b-container">
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://nardacyon.github.io/WeatherDashboard/" target="_blank" rel="noreferrer nofollow">Weather Dashboard </a>
                            <p>This site allows the user to search up a location and find the weather outlook as well as a 5 day forecast.</p>
                            <a class="repo" href="https://github.com/Nardacyon/WeatherDashboard/" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/weather.png" alt="Weather and forecast app"/>
                    </div>
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://nardacyon.github.io/Day-Planner/" target="_blank" rel="noreferrer nofollow">Day Planner</a>
                            <p>This app was one of my earlier works, its purpose is to help users plan out their work day. By inputting an event in the text area and clicking save, you can plan your day accordingly.</p>
                            <a class="repo" href="https://github.com/Nardacyon/Day-Planner/" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/day-planner.png" alt="Day planner app"/>
                    </div>
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://nardacyon.github.io/LocationLookup/" target="_blank" rel="noreferrer nofollow">Location Lookup</a>
                            <p>My most recent project. This project takes a location and displays a map of the location, weather outlook, and major news headlines relating to the user's search.</p>
                            <a class="repo" href="https://github.com/Nardacyon/LocationLookup/" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/location-lookup.png" alt="Location lookup app"/>
                    </div>
                </div>        
                <div class="p-b-container">
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://gitgudburgers.herokuapp.com/" target="_blank" rel="noreferrer nofollow">Git Gud Burger</a>
                            <p>Git Gud Burger is an express app that is deployed on heroku. This is my first project that I have used the MVC design, and also my first express handlebars application.</p>
                            <a class="repo" href="https://github.com/Nardacyon/GitGudBurger" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/GGBurger.png" alt="Git Gud Burger Page"/>
                    </div>
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://kt-note-taker.herokuapp.com/" target="_blank" rel="noreferrer nofollow">Note Taker</a>
                            <p>This app was one of my earlier works, its purpose is to help users plan out their work day. By inputting an event in the text area and clicking save, you can plan your day accordingly.</p>
                            <a class="repo" href="https://github.com/Nardacyon/Note-Taker" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/NoteTaker.PNG" alt="Note Taker App"/>
                    </div>
                    <div class="p-box">
                        <div class="text-overlay">
                            <a href="https://morning-plains-94430.herokuapp.com/" target="_blank" rel="noreferrer nofollow">Black Jack</a>
                            <p>This is a blackjack game using a Deck API, Handlebars, Passport authentication and alpine.js</p>
                            <a class="repo" href="https://github.com/melty100/Blackjack" target="_blank" rel="noreferrer nofollow">Github Repo Here!</a>
                        </div>
                        <img src="./assets/images/blackjack.PNG" alt="Black Jack Game"/>
                    </div>
                </div>
            </div>
    )
    }
}