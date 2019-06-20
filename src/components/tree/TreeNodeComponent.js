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
            isExtended: false,
        }
    }

    render() {
        return <div>
            <div style={this.contentStyles()}>
                {this.renderContent()}
            </div>
            <div>
                {this.renderChildren()}
            </div>
        </div>;
    }

    contentStyles = () => {
        const {id, selectedItem, level} = this.props;

        const style = {paddingLeft: 10 * level};

        if (id === selectedItem) {
            return {...style, backgroundColor: '#E6E6E6'};
        }

        return style;
    };

    renderContent = () => {
        if (this.isExtendable()) {
            return <ExpandButtonWrapper
                isExtended={this.state.isExtended}
                onExtendedToggle={this.onExtendedToggle}>
                {this.renderCard()}
            </ExpandButtonWrapper>;
        }

        return <div style={{paddingLeft: 23}}>
            {this.renderCard()}
        </div>;
    };

    renderCard = () => {
        const {id, renderItem} = this.props;

        return renderItem(id, this.setExpanded)
    };

    renderChildren = () => {
        const {isExtended} = this.state;
        const {children} = this.props;

        if (!isExtended) {
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
            children={item.children}
            renderItem={this.props.renderItem}
            selectedItem={this.props.selectedItem}
            level={item.level}/>
    };

    isExtendable = () => {
        return !!this.props.children;
    };

    onExtendedToggle = () => {
        this.setState({isExtended: !this.state.isExtended});
    };

    setExpanded = isExtended => {
        this.setState({isExtended});
    };
}

TreeNodeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.array,
    renderItem: PropTypes.func.isRequired,
    level: PropTypes.number
};
