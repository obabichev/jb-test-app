import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './MenuItemComponent.css';
import {MenuAnchorContainer} from '../../containers/MenuAnchorContainer';

export class MenuItemComponent extends Component {

    render() {
        const {title, url} = this.props.menuItem;
        const {isSelected} = this.props;

        const selectedMSG = isSelected ? '(SELECTED)' : '';

        if (url) {
            return <div>
                <Link onClick={this.onClick} className="menu_item_component_title" to={url}>
                    {selectedMSG} {title}
                </Link>
                {this.renderAnchors()}
            </div>;
        } else {
            return <div onClick={this.onClick} className="menu_item_component_title">
                {selectedMSG} {title}
                {this.renderAnchors()}
            </div>;
        }
    }

    renderAnchors = () => {
        const {anchors, isSelected} = this.props;

        if (!isSelected) {
            return null;
        }

        if (anchors.length === 0) {
            return null;
        }

        return anchors.map(this.renderAnchor)
    };

    renderAnchor = anchor => {
        return <MenuAnchorContainer key={anchor.id} anchorId={anchor.id}/>;
    };

    onClick = () => {
        const {setExpanded, setCurrentPage} = this.props;
        const {id} = this.props.menuItem;

        setCurrentPage(id);

        if (setExpanded) {
            setExpanded(true);
        }
    };
}

MenuItemComponent.propTypes = {
    menuItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    }),
    isSelected: PropTypes.bool,
    setExpanded: PropTypes.func,
    setCurrentPage: PropTypes.func,
    setCurrentAnchor: PropTypes.func,
    anchors: PropTypes.array.isRequired
};