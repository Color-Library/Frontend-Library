import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css";
import { useTheme } from '../context/ThemeProvider';

export default function Header ({ tabs, hBackgroundColor, hColor, hLogo }) {
    const theme = useTheme();

    hColor = hColor ? hColor : theme.hColor
    const style = {
        backgroundColor: hBackgroundColor ? hBackgroundColor : theme.hBackgroundColor,
        color: hColor 
      };

    hLogo = hLogo ? hLogo : theme.hLogo

    return (
        <div aria-label='header' className="topnav" style={style}>
          <img src={hLogo} className="iconlogo" alt="icon" />
          {tabs.map((tab, indx) => (
            <a className="leftnav" style={{color: hColor}} href={tab.link} key={indx}>
                {tab.name}
            </a>
          ))}
          {/*
          <a className="rightnav" style={{color: hColor}} href={tab4[1]}>{tab4[0]}</a> */}
        </div>
    )
}

Header.propTypes = {
    tabs: PropTypes.PropTypes.arrayOf(PropTypes.number).isRequired,
};

Header.defaultProps = {
    tabs: [
        {name: 'Home', link: '#'},
        {name: 'About', link: '#'},
        {name: 'Profile', link: '#'},
        {name: 'Contact', link: '#'}
    ],
};
