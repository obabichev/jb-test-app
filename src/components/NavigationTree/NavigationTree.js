import React, {Component} from 'react';

import './NavigationTree.css';
import {TreeViewComponent} from '../tree/TreeViewComponent';
import {MenuItemContainer} from '../../containers/MenuItemContainer';

export class NavigationTree extends Component {

    render() {
        return <div className="navigation_tree_container">
            <TreeViewComponent data={this.props.data}
                               renderItem={this.renderMenuItem}
                               selectedItem={this.props.selectedPageId}/>
        </div>;
    }

    renderMenuItem = (pageId, isSelected, setExpanded) => {
        const {selectedMenuItem} = this.props;
        return <MenuItemContainer
            pageId={pageId}
            isSelected={selectedMenuItem === pageId}
            setExpanded={setExpanded}/>
    };
}
