import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../icons/Icon';

import styles from './ExpandButton.module.scss';


export const ExpandButton = props => (
    <div className={styles.container}>
        <div className={styles.button_area}
             onClick={props.onExpandToggle}>
            <Icon icon={props.isExpanded ? "up" : "down"}
                  width={8}
                  height={5}/>
        </div>
    </div>
);


ExpandButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    onExpandToggle: PropTypes.func.isRequired
};
