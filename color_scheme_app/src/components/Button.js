import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"

export default function Button({ label, backgroundColor, onClick, color, borderColor }) {
  const style = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
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
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  borderColor: null,
  backgroundColor: null,
  color: null,
  onClick: undefined,
};