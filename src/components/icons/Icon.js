import React from 'react';
import PropTypes from 'prop-types';

export const Icon = props => (
    <img width={props.width} height={props.height} src={`/icons/${props.icon}.svg`}/>
);

Icon.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    icon: PropTypes.string.isRequired
};
