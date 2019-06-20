import React from 'react';
import {ExpandButton} from './ExpandButton';

export const ExpandButtonWrapper = props => (
    <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <ExpandButton {...props}/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </div>
);
