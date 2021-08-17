import React from 'react';
import Button from '../Button/Button';
import "./Footer.css"
import { useTheme } from '../../context/ThemeProvider';

type subitems = [
  {name?: string, path?: string},
  {name?: string, path?: string},
  {name?: string, path?: string},
]

type content = [
      {
        name?: string,
        subItems?: subitems,
    },
    {
        name?: string,
        subItems?: subitems,
    },
    {
        name?: string,
        subItems?: subitems,
    },
  ]

export interface FooterProps {
  content?: content,
  FooterLabel?: string,
  FooterBackgroundColor?: string,
  FooterTxtColor?: string,
  Copyright?: string,
  info?: {name?: string, text?: string}
  footerButton?: {name?: string, action?: string},
}

const Footer = ({
  FooterLabel = "Diva Component Library",
  FooterBackgroundColor,
  FooterTxtColor,
  Copyright = "2021. Drea & Davi Capstone Project",
  info = {name: 'contact', text: '500 MARCY LAB, BLM, 2019'},
  content = [
    {
      name: 'Media',
      subItems: [
          {name: 'Online', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Print', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Alternate', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
      ]
  },
  {
      name: 'News',
      subItems: [
          {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
      ]
  },
  {
      name: 'Bulls Eys',
      subItems: [
          {name: 'More info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
      ]
  },
  ],
  footerButton =  {name: 'Button', action: ''},
}: FooterProps) => {
  const theme = useTheme();

    const style = {
        backgroundColor: FooterBackgroundColor ? FooterBackgroundColor : theme.hBackgroundColor,
        color: FooterTxtColor ? FooterTxtColor : 'white',
    }

  return (
    <footer className="footer" style={style}>
    <div className="footer__addr">
      <h1 className="footer__logo">{FooterLabel}</h1>
          
      <h2>{info.name}</h2>
      
      <p className="text">
        {info.text}<br/>
      </p>
      {footerButton ? <> <br /> <Button label={footerButton.name} backgroundColor="black"/> </> : null}
    </div>
    
    <ul className="footer__nav">
      {content.map((data, idx) => (
        <li className="nav__item" key={idx}>
        <h2 className="nav__title">{data.name}</h2>

          {data.subItems.map((inner, id) => (
            <ul className="nav__ul" key={id}>
              <li>
                <a href={inner.path}>{inner.name}</a>
              </li>
            </ul>
          ))}
        </li>
      ))}
    </ul>
    <hr/>
    <div className="legal">
      <p>&copy; {Copyright}</p>
      
      <div className="legal__links">
        <span><span className="heart">♥</span> Thank You!</span>
      </div>
    </div>
  </footer>

  );
}

export default Footer
