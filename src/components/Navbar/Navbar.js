import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './styles.css';

export default class Navbar extends Component {
    state = { active: false }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <a href="/" className="navbar-logo">King</a>

                <div class="toggle">
                    {/* replaced class menu */}
                    <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>

                            )
                        })}
                    </ul>
                </div>
                <p class="lang">En</p>
            </nav>
        )
    }
}