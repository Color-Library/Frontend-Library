import React from 'react';
// import PropTypes from 'prop-types';
import "../styles/Breadcrumbs.css"
import { useTheme } from '../context/ThemeProvider';

export default function Breadcrumbs({ background, tab1, tab2, tab3, tab4, href, href2, href3, href4, color}) {
  const theme = useTheme();

  tab1= tab1 ? tab1 : theme.tab1
  tab2= tab2 ? tab2 : theme.tab2
  tab3= tab3 ? tab3 : theme.tab3
  tab4= tab4 ? tab4 : theme.tab4
  href= href ? href : theme.href
  href2= href2 ? href2 : theme.href2
  href3= href3 ? href3 : theme.href3
  href4= href4 ? href4 : theme.href4

  const style = {
    background: background ? background : theme.btnBackgroundColor,
  };
  const txtStyle = {
      color: color ? color : theme.borderOuterBorder
  }

  return (
    <div class="wrapper">
    <ul>
        <li>
            <a href={href}>
            <div className="icon" style={style} />
                <p style={txtStyle}>{tab1}</p>
            </a>
        </li>
        <li>
            <a href={href2}>
                <div className="icon" style={style} />
                <p style={txtStyle}>{tab2}</p>
            </a>
        </li>
        <li>
            <a href={href3}>
                <div className="icon" style={style} />
                <p style={txtStyle}>{tab3}</p>
            </a>
        </li>
        <li>
            <a href={href4}>
                <div className="icon" style={style} />
                <p style={txtStyle}>{tab4}</p>
            </a>
        </li>
    </ul>
    </div>
  );
}
