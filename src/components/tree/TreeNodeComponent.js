import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ExpandButtonWrapper} from './ExpandButtonWrapper';

/**
 * This class used by TreeViewComponent to display data recursively
 */
export class TreeNodeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        }
    }

    render() {
        return <div style={{paddingLeft: 30}}>
            <div>
                {this.renderContent()}
            </div>
            <div>
                {this.renderChildren()}
            </div>
        </div>;
    }

    renderContent = () => {
        if (this.isCollapsible()) {
            return <ExpandButtonWrapper
                isExtended={this.state.collapsed}
                onExtendedToggle={this.onExtendedToggle}>
                {this.renderCard()}
            </ExpandButtonWrapper>;
        }

        return this.renderCard();
    };

    renderCard = () => {
        const {id} = this.props;

        return <div>
            {id}
        </div>;
    };

    renderChildren = () => {
        const {collapsed} = this.state;
        const {children} = this.props;

        if (collapsed) {
            return null;
        }

        if (!children) {
            return null;
        }

        return children.map(this.renderChild);
    };

    renderChild = (item) => {
        return <TreeNodeComponent
            key={item.id}
            id={item.id}
            children={item.children}/>
    };

    isCollapsible = () => {
        return !!this.props.children;
    };

    onExtendedToggle = () => {
        this.setState({collapsed: !this.state.collapsed});
    }
}

TreeNodeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.array
};
