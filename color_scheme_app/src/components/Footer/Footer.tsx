import React from 'react';
import Button from '../Button/Button';
import "./Footer.css"
// import { useTheme } from '../../context/ThemeProvider';

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
  content: content,
  FooterLabel?: string,
  FooterBackgroundColor?: string,
  FooterTxtColor?: string,
  Copyright?: string,
  info?: {name?: string, text?: string}
  footerButton?: {name?: string, action?: string},
}

const Footer = ({
  FooterLabel,
  FooterBackgroundColor,
  FooterTxtColor,
  Copyright,
  info = {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  content,
  footerButton =  {name: 'Button', action: ''},
}: FooterProps) => {
  // const theme = useTheme();

    const style = {
        backgroundColor: FooterBackgroundColor,
        color: FooterTxtColor,
    }

  return (
    <footer className="footer" style={style}>
    <div className="footer__addr">
      <h1 className="footer__logo">{FooterLabel}</h1>
          
      <h2>{info.name}</h2>
      
      <p className="text">
        {info.text}<br/>
      </p>
      {footerButton ?  <Button label={footerButton.name}/> : null}
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
