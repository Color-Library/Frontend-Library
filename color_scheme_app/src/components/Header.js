import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css";
import { useTheme } from '../context/ThemeProvider';

export default function Header ({ tab1, tab2, tab3, tab4, hBackgroundColor, hColor, hLogo }) {
    const theme = useTheme();

    hColor = hColor ? hColor : theme.hColor
    const style = {
        backgroundColor: hBackgroundColor ? hBackgroundColor : theme.hBackgroundColor,
        color: hColor 
      };

    tab1= tab1 ? tab1 : theme.tab1
    tab2= tab2 ? tab2 : theme.tab2
    tab3= tab3 ? tab3 : theme.tab3
    tab4= tab4 ? tab4 : theme.tab4
    hLogo= hLogo ? hLogo : theme.hLogo

    return (
        <div aria-label='header' className="topnav" style={style}>
          <img src={hLogo} className="iconlogo" alt="icon" />
          <a className="leftnav" style={{color: hColor}} href={tab1[1]}>{tab1[0]}</a>
          <a className="leftnav" style={{color: hColor}} href={tab2[1]}>{tab2[0]}</a>
          <a className="rightnav" style={{color: hColor}} href={tab3[1]}>{tab3[0]}</a>
          <a className="rightnav" style={{color: hColor}} href={tab4[1]}>{tab4[0]}</a>
        </div>
    )
}

Header.propTypes = {
    tab1: PropTypes.PropTypes.string.isRequired,
    tab2: PropTypes.PropTypes.string.isRequired,
    tab3: PropTypes.PropTypes.string.isRequired,
    tab4: PropTypes.PropTypes.string.isRequired,
    href: PropTypes.PropTypes.string.isRequired,
    href2: PropTypes.PropTypes.string.isRequired,
    href3: PropTypes.PropTypes.string.isRequired,
    href4: PropTypes.PropTypes.string.isRequired

};

Header.defaultProps = {
    tab1: null,
    tab2: null, 
    tab3: null, 
    tab4: null,
    href: null, 
    href2: null,
    href3: null, 
    href4:null

};
