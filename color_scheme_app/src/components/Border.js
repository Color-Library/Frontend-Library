import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Border.css"
import Button from './Button';

export default function Border({backgroundColor, outerBorder, midBorder, innerBorder,content, txtColor}) {
    return (
        <div style={{border: '35px solid'+outerBorder, borderLeft:'50px solid'+outerBorder, borderRight:'50px solid'+outerBorder, backgroundColor:backgroundColor}}>
            <div style={{border: '25px solid'+midBorder, borderLeft:'50px solid'+midBorder, borderRight:'50px solid'+midBorder}}>
                <div style={{border: '25px solid'+innerBorder,  borderLeft:'50px solid'+innerBorder, borderRight:'50px solid'+innerBorder}}>
                    <div style={{color: txtColor}}>{content}</div>
                </div>
           </div>
        </div>
    );
}

Border.propTypes = {
    backgroundColor: PropTypes.string,
    outerBorder: PropTypes.string,
    midBorder: PropTypes.string,
    innerBorder: PropTypes.string,
    content: PropTypes.string,
    txtColor: PropTypes.string,
}

Border.defaultProps = {
    backgroundColor: null,
    outerBorder: null,
    midBorder: null,
    innerBorder: null, 
    content: null,
    txtColor: null,
}
