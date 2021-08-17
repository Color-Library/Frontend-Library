import React from 'react';
import "./Header.css";
import { useTheme } from '../../context/ThemeProvider';

type tabs = [
    {name?: string, link?: string},
    {name?: string, link?: string},
    {name?: string, link?: string},
]

export interface HeaderProps {
    tabs?: tabs,
    hBackgroundColor?: string,
    hColor?: string,
    hLogo?: string,
}

const Header = ({
    tabs = [
      {name: 'Home', link: '#home'},
      {name: 'About', link: '#about'},
      {name: 'More Info', link: '#moreinfo'},
    ],
    hBackgroundColor,
    hColor,
    hLogo = "https://img.icons8.com/ios/50/000000/pokemon.png"
}: HeaderProps) => {
    const theme = useTheme();
    const style = {
        backgroundColor: hBackgroundColor ? hBackgroundColor : theme.hBackgroundColor,
        color: hColor ? hColor : theme.hColor,
      };

    return (
        <header style={style}>
            {hLogo ? <img src={hLogo} className="logo" alt="icon" /> : null}
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                {tabs.map((tab, indx) => (
                    <li>
                        <a href={tab.link} style={{color: hColor}} key={indx}>
                            {tab.name}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
            {/* <Searchbar /> */}
            <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span/>
            </label>
      </header>
    )
}

export default Header