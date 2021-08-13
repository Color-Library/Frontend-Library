import React from 'react';
import Button from '../Button/Button';
// import { useTheme } from '../../context/ThemeProvider';

export interface PageProps {
    pagePadding?: string,
    pageContent?: string,
    pageBorderColor?: string,
    pageBorderType?: string,
    pageBoxShadow?: string,
    pageBorderRadius?: string,
    pageWidth?: string,
    pageHeight?: string,
}

const Page = ({
    pagePadding,
    pageContent,
    pageBorderColor,
    pageBorderType,
    pageBoxShadow,
    pageBorderRadius,
    pageWidth,
    pageHeight
}: PageProps) => {
    // const theme = useTheme();
    const style = {
        border: '3px '+pageBorderType+' '+pageBorderColor,
        padding: pagePadding,
        boxShadow: pageBoxShadow,
        borderRadius: pageBorderRadius,
        height:pageHeight,
        width: pageWidth,
    }
    return(
        <div style={style}>
            {pageContent}
            <Button />
        </div>
    );
}

export default Page
