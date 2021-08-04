import React from 'react';
// import PropTypes from 'prop-types';
import "../styles/Breadcrumbs.css"

export default function Breadcrumbs({ backgroundColor, tab1, tab2, tab3, tab4 }) {

  const style = {
    background: backgroundColor,
  };

  return (
    <div class="wrapper">
    <ul>
        <li>
            <a href={tab1[1]}>
            <div className="icon" style={style} />
                <p>{tab1[0]}</p>
            </a>
        </li>
        <li>
            <a href={tab2[1]}>
                <div className="icon" style={style} />
                <p>{tab2[0]}</p>
            </a>
        </li>
        <li>
            <a href={tab3[1]}>
                <div className="icon" style={style} />
                <p>{tab3[0]}</p>
            </a>
        </li>
        <li>
            <a href={tab4[1]}>
                <div className="icon" style={style} />
                <p>{tab4[0]}</p>
            </a>
        </li>
    </ul>
    </div>
  );
}
