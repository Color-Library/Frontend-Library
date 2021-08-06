import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css"
import { useTheme } from '../context/ThemeProvider';

export default function Button({ btnBackgroundColor, btnBorderColor, btnWidth, btnHeight, btnLabel, onClick }) {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.btnBackgroundColor !== undefined ? theme.btnBackgroundColor : btnBackgroundColor,
    borderColor: theme.btnBorderColor !== undefined  ? theme.btnBorderColor : btnBorderColor,
    width: theme.btnWidth !== undefined ? theme.btnWidth : btnWidth,
    height: theme.btnHeight !== undefined ? theme.btnHeight : btnHeight,
  };

  return (
    <button onClick={onClick ? onClick : null}
    className="buttonTemplate"
    style={style}>
      <text>{btnLabel ? btnLabel : theme.btnLabel}</text>
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
  btnLabel: null,
  btnWidth: null,
  btnHeight: null,
  btnBorderColor: null,
  btnBackgroundColor: null,
  btnTxtColor: null,
  onClick: undefined,
};