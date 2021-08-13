import React from 'react';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import "../styles/Footer.css"
import { useTheme } from '../context/ThemeProvider';

export default function Footer({
  FooterLabel,
  FooterBackgroundColor,
  FooterTxtColor,
  Copyright,
  Info,
  Content,
  footerButton,
}) {
  const theme = useTheme();

    const style = {
        backgroundColor: FooterBackgroundColor ? FooterBackgroundColor : theme.hBackgroundColor,
        color: FooterTxtColor ? FooterTxtColor : 'white',
    }

  return (
    <footer className="footer" style={style}>
    <div className="footer__addr">
      <h1 className="footer__logo">{FooterLabel}</h1>
          
      <h2>{Info.name}</h2>
      
      <p className="text">
        {Info.text}<br/>
      </p>
      {footerButton ?  <Button btnLabel={footerButton.name}/> : null}
    </div>
    
    <ul className="footer__nav">
      {Content.map((data, idx) => (
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

Footer.propTypes = {
  FooterLabel: PropTypes.string.isRequired,
  Info: PropTypes.object.isRequired,
  Copyright: PropTypes.string.isRequired,
  Content: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  // footerButton: PropTypes.object.isRequired,
};

Footer.defaultProps = {
  FooterLabel: 'The Footer.',
  Info: {name: 'contact', text: '500 Mercedes LVL, BLK, 2217'},
  Copyright: "2021 Something. All rights reserved.",
  // footerButton: {name: 'Button', action: ''},
  Content: [
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
          {name: 'More Info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Tools', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Realtor', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
      ]
  },
  {
      name: 'Bulls Eys',
      subItems: [
          {name: 'More Info', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Location', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Systems', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Tools', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
          {name: 'Realtor', path: 'https://github.com/Color-Library/Frontend-Library/blob/dev/color_scheme_app/src/styles/Footer.css'},
      ]
  },
],
};
