import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/react-portfolio" className="navbar-logo">King</Link>

                <div class="toggle">
                    {/* replaced class menu */}
                    <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
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