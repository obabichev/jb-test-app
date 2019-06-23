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
const KEY_ENTER = 13;

/**
 * This class used by TreeViewComponent to display data recursively
 */
export class TreeNodeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: (this.isExpandable() && props.allExpanded) || false
        };

        this.contentReference = null;
        this.references = {};

        this.keyListeners = {
            [KEY_LEFT]: this.onLeftPress,
            [KEY_RIGHT]: this.onRightPress,
            [KEY_UP]: this.onUpPress,
            [KEY_DOWN]: this.onDownPress,
            [KEY_ENTER]: this.onEnterPress
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {keyboardSelection, id} = this.props;

        if (keyboardSelection !== prevProps.keyboardSelection && keyboardSelection === id) {
            this.scrollToActiveElement();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown, false);
    }

    render() {
        return <div className={styles.container}>
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

        return <div ref={refId => this.contentReference = refId}
                    className={contentContainerClassName}>
            <ExpandButtonWrapper
                hideButton={hideExpandButton || !this.isExpandable()}
                isExpanded={this.state.isExpanded}
                onExpandToggle={this.onExpandToggle}>
                {this.renderCard()}
            </ExpandButtonWrapper>
        </div>;
    };

    renderCard = () => {
        const {id, renderItem, keyboardSelection} = this.props;

        const isSelectedByKeyboard = id === keyboardSelection;

        return renderItem(id, this.setExpanded, isSelectedByKeyboard);
    };

    renderChildren = () => {
        const {isExpanded} = this.state;
        const {children} = this.props;

        if (!this.isExpandable()) {
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
            keyboardSelection={this.props.keyboardSelection}
            setKeyboardSelection={this.props.setKeyboardSelection}
            onKeyboardMoveLeft={this.onKeyboardMoveLeft}
            index={index}
            keyboardMoveDown={this.keyboardMoveDown}
            keyboardMoveUp={this.keyboardMoveUp}
            onSelectItem={this.props.onSelectItem}/>
    };

    isExpandable = () => {
        const {children} = this.props;

        return children && children.length > 0;
    };

    onExpandToggle = () => {
        this.setExpanded(!this.state.isExpanded);
    };

    setExpanded = isExpanded => {
        this.setState({isExpanded: this.isExpandable() && isExpanded});
    };

    onKeyDown = (event) => {
        const {keyboardSelection, id} = this.props;

        if (keyboardSelection !== id) {
            return;
        }

        const listener = this.keyListeners[event.keyCode];

        if (listener) {
            event.preventDefault();
            listener();
        }
    };

    onLeftPress = () => {
        if (!this.state.isExpanded && this.props.onKeyboardMoveLeft) {
            this.props.onKeyboardMoveLeft();
            return;
        }

        this.setExpanded(false);
    };

    onRightPress = () => {
        if (this.isExpandable()) {
            this.setExpanded(true);
        }
    };

    onUpPress = () => {
        const {keyboardMoveUp, index} = this.props;

        keyboardMoveUp(index);
    };

    onDownPress = () => {
        const {setKeyboardSelection, children, keyboardMoveDown, index} = this.props;
        const {isExpanded} = this.state;

        if (isExpanded) {
            setKeyboardSelection(children[0].id);
        } else {
            keyboardMoveDown(index);
        }
    };

    onEnterPress = () => {
        const {onSelectItem, id} = this.props;

        this.setExpanded(true);

        if (onSelectItem) {
            onSelectItem(id);
        }
    };

    onKeyboardMoveLeft = () => {
        this.props.setKeyboardSelection(this.props.id);
    };

    keyboardMoveDown = (index) => {
        const {children} = this.props;
        if (index < children.length - 1) {
            this.props.setKeyboardSelection(children[index + 1].id);
        } else {
            this.props.keyboardMoveDown(this.props.index);
        }
    };

    keyboardMoveUp = (index) => {
        const {children} = this.props;
        if (index > 0) {
            this.references[children[index - 1].id].onKeyboardMovedFromBottom();
        } else {
            this.props.setKeyboardSelection(this.props.id);
        }
    };

    /**
     * this function is used for direct call from parent
     */
    onKeyboardMovedFromBottom = () => {
        const {isExpanded} = this.state;
        const {children} = this.props;

        if (isExpanded) {
            this.references[children[children.length - 1].id].onKeyboardMovedFromBottom();
        } else {
            this.props.setKeyboardSelection(this.props.id);
        }
    };

    scrollToActiveElement = () => {
        const offsetTop = this.contentReference.offsetTop;

        const diff = offsetTop - window.pageYOffset;

        if (diff > window.innerHeight || diff < 0) {
            window.scroll({
                top: offsetTop - 200,
                left: 0,
                behavior: 'smooth'
            });
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
    keyboardSelection: PropTypes.string,
    setKeyboardSelection: PropTypes.func,
    onKeyboardMoveLeft: PropTypes.func,
    keyboardMoveDown: PropTypes.func,
    keyboardMoveUp: PropTypes.func,
    onSelectItem: PropTypes.func
};
