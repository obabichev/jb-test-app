import React from 'react';
import PropTypes from 'prop-types';
import {DownIcon} from '../icons/DownIcon';
import {UpIcon} from '../icons/UpIcon';

export const ExpandButton = props => (
    <div onClick={props.onExtendedToggle} style={{cursor: 'pointer', paddingLeft: 10, paddingRight: 5, width: 8}}>
        <div>
            {props.isExtended
                ? <UpIcon width={8} height={5}/>
                : <DownIcon width={8} height={5}/>}
        </div>
    </div>
);

ExpandButton.propTypes = {
    isExtended: PropTypes.bool.isRequired,
    onExtendedToggle: PropTypes.func.isRequired
};
