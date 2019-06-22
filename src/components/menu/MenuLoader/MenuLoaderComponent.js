import React, {Component} from 'react';
import {TreeViewComponent} from '../../tree/TreeViewComponent/TreeViewComponent';

import styles from './MenuLoaderComponent.module.scss';

const LOADER_MENU_STRUCTURE = [
    {
        id: '1',
        level: 0,
        children: [
            {id: '2', level: 1},
            {id: '3', level: 1}
        ]
    },
    {
        id: '4',
        level: 0,
        children: [
            {id: '5', level: 1},
            {id: '6', level: 1}
        ]
    }
];

export class MenuLoaderComponent extends Component {

    render() {
        return <div className={styles.container}>
            <TreeViewComponent data={LOADER_MENU_STRUCTURE}
                               renderItem={this.renderItem}
                               hideExpandButton
                               allExpanded/>
        </div>;
    }

    renderItem = () => {
        return <div style={{backgroundColor: '#EBEBEB', width: 200, height: 13, margin: 10}}/>;
    }

}
