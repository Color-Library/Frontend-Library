import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"

export default function Button({ label, backgroundColor, onClick, color, borderColor, width, height}) {
  const style = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    width: width,
    height: height 
  };

  return (
    <button onClick={onClick}
    className="buttonTemplate"
    style={style}>
      <text style={color && { color }}>{label}</text>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  width: null,
  height: null,
  borderColor: null,
  backgroundColor: null,
  color: null,
  onClick: undefined,
};