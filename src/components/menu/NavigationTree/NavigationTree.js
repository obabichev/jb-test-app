import React, {Component} from 'react';

import {TreeViewComponent} from '../../tree/TreeViewComponent';
import {MenuItemContainer} from '../../../containers/menu/MenuItemContainer';

import './NavigationTree.css';

export class NavigationTree extends Component {

    render() {
        return <div className="navigation_tree_container">
            <TreeViewComponent data={this.props.data}
                               renderItem={this.renderMenuItem}
                               selectedItem={this.props.selectedMenuItem}/>
        </div>;
    }

    renderMenuItem = (pageId, setExpanded) => {
        const {selectedMenuItem} = this.props;
        return <MenuItemContainer
            pageId={pageId}
            isSelected={selectedMenuItem === pageId}
            setExpanded={setExpanded}/>
    };
}
