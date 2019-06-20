import React from 'react';
import {ExpandButton} from './ExpandButton';

export const ExpandButtonWrapper = props => (
    <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: 14, height: 32, cursor: "pointer"}}>
                <ExpandButton {...props}/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    </div>
);
