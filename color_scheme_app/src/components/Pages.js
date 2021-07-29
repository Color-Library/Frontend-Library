import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeProvider';

export default function Pages({pagePadding,pageContent, pageBorderColor, pageBorderType, pageBoxShadow, pageBorderRadius, pageWidth, pageHeight}){
    const theme = useTheme();
    pageBorderType = pageBorderType ? pageBorderType : theme.pageBorderType
    pageBorderColor = pageBorderColor ? pageBorderColor : theme.pageBorderColor
    pageWidth = pageWidth ? pageWidth : theme.pageWidth
    pageHeight = pageHeight ? pageHeight : theme.pageHeight
    const style = {
        border: '3px '+pageBorderType+' '+pageBorderColor,
        padding: pagePadding ? pagePadding : theme.pagePadding,
        boxShadow: pageBoxShadow ? pageBoxShadow : theme.pageBoxShadow,
        borderRadius: pageBorderRadius ? pageBorderRadius : theme.pageBorderRadius,
        height:pageHeight ? pageHeight : theme.pageHeight,
        width: pageWidth ? pageWidth : theme.pageWidth
    }
    return(
        <div style={style}>
            {pageContent ? pageContent : theme.pageContent}
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