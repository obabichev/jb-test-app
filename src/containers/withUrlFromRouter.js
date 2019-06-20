import React from 'react';

export const withUrlFromRouter = Component => props => {
    const url = props.match.params.page;
    return <Component {...props} url={url}/>
};
