import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '../../icons/Icon';
import styles from './ExpandButton.module.scss';
import {RotateAnimation} from '../../animations/RotateAnimation/RotateAnimation';


export const ExpandButton = props => (
    <div className={styles.container}>
        <div className={styles.button_area}
             onClick={props.onExpandToggle}>
            <RotateAnimation rotated={!!props.isExpanded}>
                <Icon icon="down"
                      width={8}
                      height={5}/>
            </RotateAnimation>
        </div>
    </div>
);


ExpandButton.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    onExpandToggle: PropTypes.func.isRequired
};
