import React from 'react';
import {ExpandButton} from './ExpandButton';

export const ExpandButtonWrapper = props => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <ExpandButton {...props}/>
        {props.children}
    </div>
);
