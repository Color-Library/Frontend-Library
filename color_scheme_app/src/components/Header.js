import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css"

export default function Header ({ tab1, tab2, tab3, tab4, backgroundColor, color, logo }) {
    return (
        <div aria-label='header' className="topnav" style={backgroundColor && { backgroundColor }}>
          <img src={logo} className="iconlogo"/>
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
