import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Icon.css"
import { useTheme } from '../context/ThemeProvider';

export default function Icon({ imageLink }){
    const theme = useTheme();
    imageLink = imageLink ? imageLink : theme.imageLink
    const style = {
        border: '8px solid' + theme.formBorder,
    }

    return(
        <div>
           <img className='imgStyle' style={style} src={imageLink} alt="iconpic"/> <div></div>
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