import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ExpandButtonWrapper} from '../ExpandButtonWrapper/ExpandButtonWrapper';
import classNames from 'classnames/bind';

import styles from './TreeNodeComponent.module.scss';
import {SlideDownAnimation} from '../../animations/ListAppearAnimation/SlideDownAnimation';

const cx = classNames.bind(styles);

/**
 * This class used by TreeViewComponent to display data recursively
 */
export class TreeNodeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: props.allExpanded || false,
        }
    }

    render() {
        return <div style={{overflow: 'hidden'}}>
            {this.renderContent()}
            <SlideDownAnimation>
                {this.renderChildren()}
            </SlideDownAnimation>
        </div>;
    }

    renderContent = () => {
        const {id, selectedItem, level, hideExpandButton} = this.props;

        const contentContainerClassName = cx({
            selected_item: id === selectedItem,
            [`level${level}_content_container`]: true
        });

        return <div className={contentContainerClassName}>
            <ExpandButtonWrapper
                hideButton={hideExpandButton || !this.isExtendable()}
                isExpanded={this.state.isExpanded}
                onExpandToggle={this.onExpandToggle}>
                {this.renderCard()}
            </ExpandButtonWrapper>
        </div>;
    };

    renderCard = () => {
        const {id, renderItem} = this.props;

        return renderItem(id, this.setExpanded)
    };

    renderChildren = () => {
        const {isExpanded} = this.state;
        const {children} = this.props;

        if (!isExpanded) {
            return null;
        }

        if (!children) {
            return null;
        }

        return <div>
            {children.map(this.renderChild)}
        </div>
    };

    renderChild = (item) => {
        return <TreeNodeComponent
            key={item.id}
            id={item.id}
            children={item.children}
            renderItem={this.props.renderItem}
            selectedItem={this.props.selectedItem}
            level={item.level}
            hideExpandButton={this.props.hideExpandButton}
            allExpanded={this.props.allExpanded}/>
    };

    isExtendable = () => {
        return !!this.props.children;
    };

    onExpandToggle = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    };

    setExpanded = isExpanded => {
        this.setState({isExpanded});
    };
}

TreeNodeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.array,
    renderItem: PropTypes.func.isRequired,
    level: PropTypes.number,
    hideExpandButton: PropTypes.bool,
    allExpanded: PropTypes.bool
};
