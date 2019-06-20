import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TreeNodeComponent} from './TreeNodeComponent';

/**
 * This component allows to render tree elements structure
 */
export class TreeViewComponent extends Component {

    render() {
        const {data} = this.props;

        return <div>
            {data.map(this.renderNode)}
        </div>;
    }

    renderNode = item => {
        return <TreeNodeComponent
            key={item.id}
            id={item.id}
            level={item.level}
            children={item.children}
            renderItem={this.props.renderItem}
            selectedItem={this.props.selectedItem}
            hideExtendedButton={this.props.hideExtendedButton}
            allExtended={this.props.allExtended}/>
    }
}

TreeViewComponent.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    selectedItem: PropTypes.string,
    hideExtendedButton: PropTypes.bool,
    allExtended: PropTypes.bool
};
