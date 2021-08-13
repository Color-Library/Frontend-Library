import React from 'react';
import "./Header.css";
// import { useTheme } from '../../context/ThemeProvider';

type tabs = [
    {name?: string, link?: string},
    {name?: string, link?: string},
    {name?: string, link?: string},
]

export interface HeaderProps {
    tabs: tabs,
    hBackgroundColor?: string,
    hColor?: string,
    hLogo?: string,
}

const Header = ({
    tabs,
    hBackgroundColor,
    hColor,
    hLogo
}: HeaderProps) => {

    const style = {
        backgroundColor: hBackgroundColor,
        color: hColor,
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