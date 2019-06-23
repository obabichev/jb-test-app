import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TreeNodeComponent} from '../TreeNodeComponent/TreeNodeComponent';


/**
 * This component allows to render tree elements structure
 */
export class TreeViewComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keyboardSelection: null
        };

        this.references = {};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {selectedItem} = this.props;
        if (prevProps.selectedItem !== selectedItem) {
            this.setKeyboardSelection(selectedItem);
        }
    }

    render() {
        const {data} = this.props;

        return <div onFocus={this.onFocus} onBlur={this.onBlur}>
            {data.map(this.renderNode)}
        </div>;
    }

    renderNode = (item, index) => {
        return <TreeNodeComponent
            ref={refId => this.references[item.id] = refId}
            key={item.id}
            id={item.id}
            level={item.level}
            children={item.children}
            renderItem={this.props.renderItem}
            selectedItem={this.props.selectedItem}
            hideExpandButton={this.props.hideExpandButton}
            allExpanded={this.props.allExpanded}
            keyboardSelection={this.state.keyboardSelection}
            setKeyboardSelection={this.setKeyboardSelection}
            index={index}
            keyboardMoveDown={this.keyboardMoveDown}
            keyboardMoveUp={this.keyboardMoveUp}
            onSelectItem={this.props.onSelectItem}
        />;
    };

    // onFocus = () => {
    //     const {data} = this.props;
    //     if (data.length > 0) {
    //         this.setState({
    //             keyboardSelection: data[0].id
    //         })
    //     }
    // };
    //
    // onBlur = () => {
    // };

    setKeyboardSelection = (id) => {
        setTimeout(() => this.setState({keyboardSelection: id}), 0);
    };

    keyboardMoveDown = (index) => {
        const {data} = this.props;
        if (index < data.length - 1) {
            this.setKeyboardSelection(data[index + 1].id);
        }
    };

    keyboardMoveUp = (index) => {
        const {data} = this.props;
        if (index > 0) {
            this.references[data[index - 1].id].onKeyboardMovedFromBottom();
        }
    }
}

TreeViewComponent.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    selectedItem: PropTypes.string,
    hideExpandButton: PropTypes.bool,
    allExpanded: PropTypes.bool,
    onSelectItem: PropTypes.func
};
