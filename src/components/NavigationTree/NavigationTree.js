import React, {Component} from 'react';

import './NavigationTree.css';
import {TreeViewComponent} from '../tree/TreeViewComponent';

export class NavigationTree extends Component {

    render() {
        return <div className="navigation_tree_container">
            <TreeViewComponent {...this.props}/>
        </div>;
    }

}
