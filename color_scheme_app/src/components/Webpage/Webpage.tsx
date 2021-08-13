import React from 'react';
// import { useTheme } from '../../context/ThemeProvider';

export interface WebpageProps {
    content?: string,
}

const Webpage = ({ content }: WebpageProps) => {
    // const theme = useTheme();
    // content = content ? content : theme.formContent
    return (
        <div>
            {content}
        </div>
    );
}

export default Webpage