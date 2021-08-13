import React from 'react';
import "./Border.css";
// import { useTheme } from '../../context/ThemeProvider';

export interface BorderProps {
    borderBackgroundColor?: string,
    borderOuterBorder?: string,
    borderMidBorder?: string,
    borderInnerBorder?: string,
    borderContent?: string,
    borderTxtColor?: string,
};

const Border = ({
    borderBackgroundColor,
    borderOuterBorder,
    borderMidBorder,
    borderInnerBorder,
    borderContent,
    borderTxtColor,
}: BorderProps) => {
    // const theme = useTheme();

    return (
        <div style={{border: '35px solid '+borderOuterBorder, borderLeft:'50px solid '+borderOuterBorder, borderRight:'50px solid '+borderOuterBorder, backgroundColor:borderBackgroundColor}}>
            <div style={{border: '25px solid'+borderMidBorder, borderLeft:'50px solid'+borderMidBorder, borderRight:'50px solid'+borderMidBorder}}>
                <div style={{border: '25px solid'+borderInnerBorder,  borderLeft:'50px solid'+borderInnerBorder, borderRight:'50px solid'+borderInnerBorder}}>
                    <div style={{color:borderTxtColor}}>
                        {borderContent}
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Border 
