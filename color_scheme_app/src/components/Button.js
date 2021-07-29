import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"
import { useTheme } from '../context/ThemeProvider';

export default function Button({ buttonLabel, onClick, btnTxtColor, btnBorderColor, btnWidth, btnHeight }) {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.backgroundColor,
    borderColor: btnBorderColor,
    width: btnWidth,
    height: btnHeight 
  };

  return (
    <button onClick={onClick}
    className="buttonTemplate"
    style={style}>
      <text style={color && { btnTxtColor }}>{buttonLabel}</text>
    </button>
  );
}

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  btnWidth: PropTypes.string,
  btnHeight: PropTypes.string,
  btnBorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  btnTxtColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonLabel: null,
  btnWidth: null,
  btnHeight: null,
  btnBorderColor: null,
  backgroundColor: null,
  btnTxtColor: null,
  onClick: undefined,
};