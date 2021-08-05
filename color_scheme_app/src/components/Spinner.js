import React from 'react';
import "../styles/Spinner.css"
import { useTheme } from '../context/ThemeProvider';

export default function Spinner({ borderTop, border }) {
  const theme = useTheme();

    const style = {
        borderTop: borderTop ? "16px solid " + borderTop : "16px solid " + theme.borderOuterBorder,
        border: border ? "6px solid " + border : "16px solid " + theme.borderOuterBorder,
    }

  return (
    <div className="spinner" style={style} />
  );
}
