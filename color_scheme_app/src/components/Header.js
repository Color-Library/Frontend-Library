import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css"

export default function Header ({ tab1, tab2, tab3, tab4, backgroundColor, }) {
    return (
        <div className="topnav" style={backgroundColor && { backgroundColor }}>
          <a className="leftnav" href="#">{tab1}</a>
          <a className="leftnav" href="#">{tab2}</a>
          <a className="rightnav" href="#">{tab3}</a>
          <a className="rightnav" href="#">{tab4}</a>
        </div>
    )
}

Header.propTypes = {
    tab1: PropTypes.string.isRequired,
    tab2: PropTypes.string.isRequired,
    tab3: PropTypes.string.isRequired,
    tab4: PropTypes.string.isRequired,
};

Header.defaultProps = {};
