import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {TreeViewComponent} from '../../tree/TreeViewComponent/TreeViewComponent';
import {MenuItemContainer} from '../../../containers/menu/MenuItemContainer';

import styles from './NavigationTree.module.scss';

export class NavigationTree extends Component {

    render() {
        return <div className={styles.container}>
            <TreeViewComponent data={this.props.data}
                               renderItem={this.renderMenuItem}
                               selectedItem={this.props.selectedMenuItem}
                               onSelectItem={this.props.onSelectItem}/>
        </div>;
    }

    renderMenuItem = (pageId, setExpanded, isSelectedByKeyboard) => {
        const {selectedMenuItem} = this.props;
        return <MenuItemContainer
            pageId={pageId}
            isSelected={selectedMenuItem === pageId}
            setExpanded={setExpanded}
            isSelectedByKeyboard={isSelectedByKeyboard}/>
    };
}

NavigationTree.propTypes = {
    data: PropTypes.array.isRequired,
    selectedMenuItem: PropTypes.string,
    onSelectItem: PropTypes.func
};