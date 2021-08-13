import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Searchbar.css"
import { useTheme } from '../context/ThemeProvider';

export default function Searchbar({ inputColor }) {
  const theme = useTheme();

  const style = {
    border: inputColor ? '2px solid '+inputColor : '2px solid '+theme.btnBorderColor
  };

  return (
    <div>
        <label for="searchbar"/>
        <input type="text" style={style} className="search-input"/>
    </div>
  );
}

Searchbar.propTypes = {
  inputColor: PropTypes.string.isRequired,
};

Searchbar.defaultProps = {
    inputColor: null,
};


