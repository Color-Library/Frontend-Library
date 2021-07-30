import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Icon.css"
import { useTheme } from '../context/ThemeProvider';

export default function Icon({ image1Link, image1Border }){
    const theme = useTheme();

    const style = {
        border: image1Border ? '10px solid'+ image1Border : '10px solid'+ theme.btnBorderColor,
    }

    return(
        <div>
           <img className='imgStyle' style={style} src={image1Link} alt="iconpic"/> <div></div>
        </div>
    );
}
 Icon.propTypes = {
     image1Link: PropTypes.string,
     image1Border: PropTypes.string
 }

 Icon.defaultProps = {
     image1Link: null,
     image1Border: null
 }