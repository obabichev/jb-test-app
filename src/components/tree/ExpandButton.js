import React from 'react';
import PropTypes from 'prop-types';
import {DownIcon} from '../icons/DownIcon';
import {UpIcon} from '../icons/UpIcon';

export const ExpandButton = props => (
    <div onClick={props.onExtendedToggle}>
        {props.isExtended
            ? <DownIcon/>
            : <UpIcon/>}
    </div>
);

ExpandButton.propTypes = {
    isExtended: PropTypes.bool.isRequired,
    onExtendedToggle: PropTypes.func.isRequired
};
