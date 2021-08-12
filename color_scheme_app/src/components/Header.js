import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css";
// import Searchbar from '../components/Searchbar';
import { useTheme } from '../context/ThemeProvider';

export default function Header ({ tabs, hBackgroundColor, hColor, hLogo }) {
    const theme = useTheme();

    const style = {
        backgroundColor: hBackgroundColor ? hBackgroundColor : theme.hBackgroundColor,
        color: hColor ? hColor : theme.hColor
      };

    return (
        <header style={style}>
            {hLogo ? <img src={hLogo} className="logo" alt="icon" /> : null}
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                {tabs.map((tab, indx) => (
                    <li>
                        <a href={tab.link} style={{color: hColor}} key={indx}>
                            {tab.name}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
            {/* <Searchbar /> */}
            <label for="nav-toggle" className="nav-toggle-label">
            <span/>
            </label>
      </header>
    )
}

Header.propTypes = {
    tabs: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
    hLogo: PropTypes.string.isRequired,
};

Header.defaultProps = {
    tabs: [
        {name: 'Home', link: '#'},
        {name: 'About', link: '#'},
        {name: 'Profile', link: '#'},
        {name: 'Contact', link: '#'}
    ],
    hLogo: 'https://img.icons8.com/nolan/50/iron-man.png',
};
