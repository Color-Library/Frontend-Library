import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css";
import { useTheme } from '../context/ThemeProvider';

export default function Header ({ tab1, tab2, tab3, tab4, backgroundColor, color, logo }) {
    const theme = useTheme();

    const style = {
        backgroundColor: backgroundColor ? backgroundColor : theme.btnBackgroundColor,
        color: color ? color : theme.color,
      };

    return (
        <div aria-label='header' className="topnav" style={style}>
         {logo && <img src={logo} className="iconlogo" alt="icon" />}
          <a className="leftnav" style={color && { color }} href={tab1[1]}>{tab1[0]}</a>
          <a className="leftnav" style={color && { color }} href={tab2[1]}>{tab2[0]}</a>
          <a className="rightnav" style={color && { color }} href={tab3[1]}>{tab3[0]}</a>
          <a className="rightnav" style={color && { color }} href={tab4[1]}>{tab4[0]}</a>
        </div>
    )
}

Header.propTypes = {
    tab1: PropTypes.arrayOf(PropTypes.string).isRequired,
    tab2: PropTypes.arrayOf(PropTypes.string).isRequired,
    tab3: PropTypes.arrayOf(PropTypes.string).isRequired,
    tab4: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Header.defaultProps = {};
