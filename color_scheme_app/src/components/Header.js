import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Header.css"

export default function Header ({ tab1, tab2, tab3, tab4, backgroundColor, }) {
    return (
        <div className="topnav" style={backgroundColor && { backgroundColor }}>
          <a className="leftnav" href={tab1[1]}>{tab1[0]}</a>
          <a className="leftnav" href={tab2[1]}>{tab2[0]}</a>
          <a className="rightnav" href={tab3[1]}>{tab3[0]}</a>
          <a className="rightnav" href={tab4[1]}>{tab4[0]}</a>
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
