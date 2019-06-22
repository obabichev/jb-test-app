import React from 'react';
import {ExpandButton} from '../ExpandButton/ExpandButton';

import styles from './ExpandButtonWrapper.module.scss'

export const ExpandButtonWrapper = props => (
    <div>
        <div className={styles.container}>
            <div>
                {props.hideButton
                    ? <div className={styles.hided_button}/>
                    : <ExpandButton {...props}/>}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </div>
);
