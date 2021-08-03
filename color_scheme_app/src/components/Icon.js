import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Icon.css"
import { useTheme } from '../context/ThemeProvider';

export default function Icon({  image1Link, image1Border }){
    const theme = useTheme();
    imageLink = imageLink ? imageLink : theme.imageLink
    const style = {
        border: '8px solid' + theme.btnBackgroundColor,
    }

    return(
        <div>
           <img className='imgStyle' style={style} src="https://img.icons8.com/nolan/50/iron-man.png" alt="iconpic"/> <div></div>
        </div>
    );
}
 Icon.propTypes = {
     imageLink: PropTypes.string,
     imageBorder: PropTypes.string
 }

 Icon.defaultProps = {
     imageLink: null,
     imageBorder: null
 }