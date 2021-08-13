import React from 'react';
import "./Icon.css"
// import { useTheme } from '../../context/ThemeProvider';

export interface IconProps {
    imageLink?: string,
    image1Border?: string,
}

const Icon = ({
    imageLink,
    image1Border,
}: IconProps) => {
    // const theme = useTheme();
    const style = {
        border: '10px solid' + image1Border,
    }

    return(
        <div>
           <img className='imgStyle' style={style} src={imageLink} alt="iconpic"/>
           <div/>
        </div>
    );
}

export default Icon
