import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"
import { useTheme } from '../context/ThemeProvider';

export default function Button({ btnBackgroundColor, btnBorderColor, btnWidth, btnHeight, btnLabel, onClick, btnTxtColor }) {
  const theme = useTheme();
  btnTxtColor = btnTxtColor ? btnTxtColor : theme.btnTxtColor

  const style = {
    backgroundColor: btnBackgroundColor ? btnBackgroundColor : theme.btnBackgroundColor,
    borderColor: btnBorderColor ? btnBorderColor : theme.btnBorderColor,
    width: btnWidth ? btnWidth : theme.btnWidth,
    height: btnHeight ? btnHeight : theme.btnHeight,
  };
  return (
    <button onClick={onClick ? onClick : null}
    className="buttonTemplate"
    style={style}>
      <text style={{color:btnTxtColor}}>{btnLabel ? btnLabel : theme.btnLabel}</text>
    </button>
  );
}

Button.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  btnWidth: PropTypes.string,
  btnHeight: PropTypes.string,
  btnBorderColor: PropTypes.string,
  btnBackgroundColor: PropTypes.string,
  btnTxtColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnLabel: 'Click Me',
  btnWidth: '100px',
  btnHeight: '40px',
  btnBorderColor: 'black',
  btnBackgroundColor: 'black',
  btnTxtColor: 'white',
  onClick: null,
};


