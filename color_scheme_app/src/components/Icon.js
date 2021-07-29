import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Icon.css"

export default function Icon({image1Link, image1Border}){
    return(
        <div>
           <img className='imgStyle' style={{border:'10px solid'+image1Border}} src={image1Link} /> <div></div>
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