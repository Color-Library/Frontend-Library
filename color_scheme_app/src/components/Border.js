import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Border.css"
import { useTheme } from '../context/ThemeProvider';

export default function Border({borderBackgroundColor,borderOuterBorder,borderMidBorder, borderInnerBorder,borderContent,borderTxtColor}) {
    const theme = useTheme();
    borderOuterBorder=borderOuterBorder ? borderOuterBorder : theme.borderOuterBorder
    borderMidBorder=borderMidBorder ? borderMidBorder : theme.borderMidBorder
    borderInnerBorder=borderInnerBorder ? borderInnerBorder : theme.borderInnerBorder
    borderTxtColor=borderTxtColor ? borderTxtColor : theme.borderTxtColor
    return (
        <div style={{border: '35px solid '+borderOuterBorder, borderLeft:'50px solid '+borderOuterBorder, borderRight:'50px solid '+borderOuterBorder, backgroundColor:borderBackgroundColor}}>
            <div style={{border: '25px solid'+borderMidBorder, borderLeft:'50px solid'+borderMidBorder, borderRight:'50px solid'+borderMidBorder}}>
                <div style={{border: '25px solid'+borderInnerBorder,  borderLeft:'50px solid'+borderInnerBorder, borderRight:'50px solid'+borderInnerBorder}}>
                    <div style={{color:borderTxtColor}}>{borderContent ? borderContent : theme.borderContent}</div>
                </div>
           </div>
        </div>
    );
}

Border.propTypes = {
    borderBackgroundColor: PropTypes.string,
    borderOuterBorder: PropTypes.string,
    borderMidBorder: PropTypes.string,
    borderInnerBorder: PropTypes.string,
    borderContent: PropTypes.string,
    borderTxtColor: PropTypes.string,
}

Border.defaultProps = {
    borderBackgroundColor: null,
    borderOuterBorder: null,
    borderMidBorder: null,
    borderInnerBorder: null, 
    borderContent: null,
    borderTxtColor: null,
}
