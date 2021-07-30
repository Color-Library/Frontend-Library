import React from 'react';
import "../styles/Footer.css"

export default function Footer({ label, backgroundColor, color }) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
    }

  return (
    <div className="footer" style={style}>
        <p>{label}</p>
    </div>
  );
}
