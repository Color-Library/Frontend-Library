import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Border.css"
import { useTheme } from '../context/ThemeProvider';

export default function Border({borderContent, borderTxtColor}) {
    const theme = useTheme();

    return (
        <div style={{border: '35px solid '+theme.borderOuterBorder, borderLeft:'50px solid '+theme.borderOuterBorder, borderRight:'50px solid '+theme.borderOuterBorder, backgroundColor:theme.borderBackgroundColor}}>
            <div style={{border: '25px solid'+theme.borderMidBorder, borderLeft:'50px solid'+theme.borderMidBorder, borderRight:'50px solid'+theme.borderMidBorder}}>
                <div style={{border: '25px solid'+theme.borderInnerBorder,  borderLeft:'50px solid'+theme.borderInnerBorder, borderRight:'50px solid'+theme.borderInnerBorder}}>
                    <div style={{color: theme.borderTxtColor}}>{borderContent}</div>
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
