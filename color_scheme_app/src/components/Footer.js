import React from 'react';
import "../styles/Footer.css"
import { useTheme } from '../context/ThemeProvider';

export default function Footer({ footerLabel, FooterBackgroundColor, FooterTxtColor }) {
  const theme = useTheme();
  footerLabel = footerLabel ? footerLabel : theme.formContent
    const style = {
        backgroundColor: FooterBackgroundColor ? FooterBackgroundColor : theme.btnBackgroundColor,
        color: FooterTxtColor ? FooterTxtColor : theme.btnTxtColor,
    }

  return (
    <div className="footer" style={style}>
        <p>{footerLabel ? footerLabel : theme.footerLabel}</p>
    </div>
  );
}
