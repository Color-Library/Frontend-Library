import React from 'react';
import PropTypes from 'prop-types';

export default function Pages({pageContent, pageBorderColor, pageBorderType, pageBoxShadow, pageBorderRadius}){
    const style = {
        border: '3px '+pageBorderType+' '+pageBorderColor,
        padding: '10px',
        boxShadow: pageBoxShadow,
        borderRadius: pageBorderRadius
    }
    return(
        <div style={style}>
            {pageContent}
        </div>
    );
}
 Pages.propTypes = {
     pageContent: PropTypes.string,
     pageBorderColor: PropTypes.string,
     pageBorderType: PropTypes.string,
     pagePadding: PropTypes.string,
     pageBoxShadow: PropTypes.string,
     pageBorderRadius: PropTypes.string
 }

 Pages.defaultProps = {
    pageContent: null,
    pageBorderColor: null,
    pageBorderType: null,
    pagePadding: null,
    pageBoxShadow: null,
    pageBorderRadius: null
 }