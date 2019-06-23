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
            kselected: null,
            direction: null
        };

        this.references = {};
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown, false);
    }

    render() {
        const {data} = this.props;

        return <div onFocus={this.onFocus} onBlur={this.onBlur}>
            {data.map(this.renderNode)}
        </div>;
    }

    flattenDataStructure = (data) => {
        const result = {};

        const iterate = item => {
            result[item.id] = {
                ...item,
                children: item.children ? item.children.map(child => child.id) : []
            };

            if (item.children) {
                item.children.forEach(iterate);
            }
        };

        data.forEach(iterate);

        return result;
    };

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
            kselected={this.state.kselected}
            setKselected={this.setKselected}
            moveDown={this.moveDown}
            moveUp={this.moveUp}
            direction={this.state.direction}
            index={index}
            nMoveDown={this.nMoveDown}
            nMoveUp={this.nMoveUp}
        />;
    };

    onFocus = () => {
        const {data} = this.props;
        if (data.length > 0) {
            this.setState({
                kselected: data[0].id
            })
        }
    };

    onBlur = () => {
    };

    moveDown = (idFrom) => {
        const {data} = this.props;

        let i = 0;
        for (let j = 0; j < data.length; j++) {
            if (data[j].id === idFrom) {
                i = j;
            }
        }
        i++;

        if (i < data.length) {
            this.setKselected(data[i].id, 'down');
        }
    };

    moveUp = (idFrom) => {
        const {data} = this.props;

        let i = 0;
        for (let j = 0; j < data.length; j++) {
            if (data[j].id === idFrom) {
                i = j;
            }
        }
        i--;

        if (i >= 0) {
            this.setKselected(data[i].id, 'up');
        }
    };

    setKselected = (id, direction = null) => {
        setTimeout(() => this.setState({kselected: id, direction}), 0);
    };

    nMoveDown = (index) => {
        const {data} = this.props;
        if (index < data.length - 1) {
            this.setKselected(data[index + 1].id);
        }
    };

    nMoveUp = (index) => {
        const {data} = this.props;
        if (index > 0) {
            this.setKselected(data[index - 1].id);
        }
        // this.references[data[index - 1].id].movedFromBottom();
        // }
    }
}

TreeViewComponent.propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    selectedItem: PropTypes.string,
    hideExpandButton: PropTypes.bool,
    allExpanded: PropTypes.bool
};
