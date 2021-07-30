import React from 'react';
import "../styles/Spinner.css"

export default function Spinner({ borderTop, border }) {
    const style = {
        borderTop: "16px solid" + borderTop,
        border: "16px solid" + border,
    }

  return (
    <div className="spinner" style={style} />
  );
}
