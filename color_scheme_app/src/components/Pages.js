import React from 'react';
import PropTypes from 'prop-types';

export default function Pages({content, borderColor, borderType, boxShadow, borderRadius}){
    const style = {
        border: '3px '+borderType+' '+borderColor,
        padding: '10px',
        boxShadow: boxShadow,
        borderRadius: '5px'
    }
    return(
        <div style={style}>
            {content}
        </div>
    );
}
 Pages.propTypes = {
     content: PropTypes.string,
     borderColor: PropTypes.string,
     borderType: PropTypes.string,
     padding: PropTypes.string,
     boxShadow: PropTypes.string,
     borderRadius: PropTypes.string
 }

 Pages.defaultProps = {
     content: null,
     borderColor: null,
     borderType: null,
     padding: null,
     boxShadow: null,
     borderRadius: null
 }