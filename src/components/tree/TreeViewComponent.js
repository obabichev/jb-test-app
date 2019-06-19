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
            children={item.children}/>
    }
}

TreeViewComponent.propTypes = {
    data: PropTypes.array.isRequired
};