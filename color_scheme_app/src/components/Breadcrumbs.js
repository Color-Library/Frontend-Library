import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Breadcrumbs.css"
import { useTheme } from '../context/ThemeProvider';

export default function Breadcrumbs({ background, tabs, color}) {
  const theme = useTheme();

  const style = {
    background: background ? background : theme.btnBackgroundColor,
  };
  const txtStyle = {
      color: color ? color : theme.borderOuterBorder
  }

  return (
    <div class="wrapper">
    <ul>
        {tabs.map((tab, idx) => (
            <li key={idx}>
                <a href="#">
                <div className="icon" style={style} />
                    <p style={txtStyle}>
                        {tab.name}
                    </p>
                </a>
            </li>
        ))}
    </ul>
    </div>
  );
}

Breadcrumbs.propTypes = {
    tabs: PropTypes.PropTypes.arrayOf(PropTypes.number).isRequired,
};

Breadcrumbs.defaultProps = {
    tabs: [
        {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
        {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
        {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
    ],
};
