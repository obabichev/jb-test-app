import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ExpandButtonWrapper} from '../ExpandButtonWrapper/ExpandButtonWrapper';
import classNames from 'classnames/bind';

import styles from './TreeNodeComponent.module.scss';
import {SlideDownAnimation} from '../../animations/ListAppearAnimation/SlideDownAnimation';

const cx = classNames.bind(styles);

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

/**
 * This class used by TreeViewComponent to display data recursively
 */
export class TreeNodeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: props.allExpanded || false
        };

        this.references = {};
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown, false);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.kselected !== this.props.kselected &&
            this.props.kselected === this.props.id
            && this.props.direction === 'up'
            && this.state.isExpanded) {
            this.props.setKselected(this.props.children[this.props.children.length - 1].id, 'up');
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
            {this.props.kselected === this.props.id ? "(k)" : null}
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

        if (!this.isExtendable()) {
            return null;
        }

        if (!isExpanded) {
            return null;
        }

        return <div>
            {children.map(this.renderChild)}
        </div>
    };

    renderChild = (item, index) => {
        return <TreeNodeComponent
            ref={refId => this.references[item.id] = refId}
            key={item.id}
            id={item.id}
            children={item.children}
            renderItem={this.props.renderItem}
            selectedItem={this.props.selectedItem}
            level={item.level}
            hideExpandButton={this.props.hideExpandButton}
            allExpanded={this.props.allExpanded}
            kselected={this.props.kselected}
            setKselected={this.props.setKselected}
            moveDown={this.moveDown}
            moveUp={this.moveUp}
            leftToParent={this.leftToParent}
            direction={this.props.direction}
            index={index}
            nMoveDown={this.nMoveDown}
            nMoveUp={this.nMoveUp}/>
    };

    isExtendable = () => {
        const {children} = this.props;

        return children && children.length > 0;
    };

    onExpandToggle = () => {
        this.setExpanded(!this.state.isExpanded);
    };

    setExpanded = isExpanded => {
        this.setState({isExpanded: this.isExtendable() && isExpanded});
    };

    onKeyDown = (event) => {
        const {kselected, id, children} = this.props;
        const {isExpanded} = this.state;

        if (event.keyCode === KEY_DOWN && kselected === id) {
            event.preventDefault();

            // if (!isExpanded) {
            //     this.props.moveDown(this.props.id);
            // } else {
            //     this.props.setKselected(children[0].id, 'down');
            // }

            if (isExpanded) {
                this.props.setKselected(children[0].id);
            } else {
                this.props.nMoveDown(this.props.index);
            }
        }

        if (event.keyCode === KEY_UP && kselected === id) {
            event.preventDefault();

            // this.props.moveUp(this.props.id);
            this.props.nMoveUp(this.props.index);
        }

        if (event.keyCode === KEY_RIGHT && kselected === id) {
            event.preventDefault();


            if (this.isExtendable()) {
                this.setExpanded(true);
            }
        }

        if (event.keyCode === KEY_LEFT && kselected === id) {
            event.preventDefault();

            if ((!this.isExtendable() || !this.state.isExpanded) && this.props.leftToParent) {
                this.props.leftToParent();
                return;
            }

            this.setExpanded(false);
        }
    };

    leftToParent = () => {
        this.props.setKselected(this.props.id);
    };

    nMoveDown = (index) => {
        const {children} = this.props;
        if (index < children.length - 1) {
            this.props.setKselected(children[index + 1].id);
        } else {
            this.props.nMoveDown(this.props.index);
        }
    };

    nMoveUp = (index) => {
        const {children} = this.props;
        if (index > 0) {
            // this.props.setKselected(children[index - 1].id);
            this.references[children[index - 1].id].movedFromBottom();
        } else {
            // this.props.nMoveUp(this.props.index);
            this.props.setKselected(this.props.id);
        }
    };

    movedFromBottom = () => {
        const {isExpanded} = this.state;
        const {children} = this.props;

        if (isExpanded) {
            console.log('[obabichev] TRUE children', children);
            this.references[children[children.length - 1].id].movedFromBottom();
        } else {
            console.log('[obabichev] FALSE children', children);
            this.props.setKselected(this.props.id);
        }
    }
}

TreeNodeComponent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.array,
    renderItem: PropTypes.func.isRequired,
    level: PropTypes.number,
    hideExpandButton: PropTypes.bool,
    allExpanded: PropTypes.bool,
    kselected: PropTypes.string,
    setKselected: PropTypes.func,
    moveDown: PropTypes.func,
    moveUp: PropTypes.func,
    leftToParent: PropTypes.func,
    direction: PropTypes.any
};
