import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"

export default function Button({ label, backgroundColor, onClick, color }) {
  return (
    <button onClick={onClick}
    className="buttonTemplate"
    style={backgroundColor && { backgroundColor }}>
      <text style={color && { color }}>{label}</text>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: null,
  backgroundColor: null,
  color: null,
  onClick: undefined,
};