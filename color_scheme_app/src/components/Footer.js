import React from 'react';
import "../styles/Footer.css"
import { useTheme } from '../context/ThemeProvider';

export default function Footer({ label, backgroundColor, color }) {
  const theme = useTheme();

    const style = {
        backgroundColor: backgroundColor ? backgroundColor : theme.btnBackgroundColor,
        color: color ? color : theme.btnTxtColor,
    }

  return (
    <div className="footer" style={style}>
        <p>{label}</p>
    </div>
  );
}
