import React from 'react';
import "./Breadcrumbs.css";
// import { useTheme } from '../../context/ThemeProvider';

type tabs = [
    {name?: string, link?: string},
    {name?: string, link?: string},
    {name?: string, link?: string},
]

export interface BreadcrumbsProps {
    tabs?: tabs,
    hBackgroundColor?: string,
    background?: string,
    color: string,
}

const Breadcrumbs = ({
    tabs = [
        {name: 'Home', link: 'https://github.com/Color-Library/Frontend-Library'},
        {name: 'About', link: 'https://www.youtube.com/watch?v=7Gbk4h2AYVE&t=1919s'},
        {name: 'More Info', link: 'https://reactjs.org/docs/refs-and-the-dom.html'},
    ],
    background,
    color,
}: BreadcrumbsProps) => {
//   const theme = useTheme();

  const style = {
    background: background,
  };
  const txtStyle = {
      color: color,
  }

  return (
    <div className="wrapper">
    <ul>
        {tabs.map((tab, indx) => (
            <li key={indx}>
                <a href={tab.link}>
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

export default Breadcrumbs
