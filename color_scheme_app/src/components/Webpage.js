import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeProvider';

export default function Webpage({content}) {
    const theme = useTheme();
    content = content ? content : theme.formContent
    return (
        <div>
            {content}
        </div>
    );
}

Webpage.propTypes = {
    content: PropTypes.string,
}

Webpage.defaultProps = {
    content: null,

}