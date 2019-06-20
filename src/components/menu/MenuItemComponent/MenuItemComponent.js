import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './MenuItemComponent.css';
import {MenuAnchorContainer} from '../../../containers/menu/MenuAnchorContainer';

export class MenuItemComponent extends Component {

    render() {
        return <div>
            <div>
                {this.renderContent()}
            </div>
            <div>
                {this.renderAnchors()}
            </div>
        </div>
    }

    renderContent = () => {
        const {url} = this.props.menuItem;
        if (url) {
            return <div>
                <Link onClick={this.onClick} className={this.titleClassName()} to={url}>
                    {this.renderCard()}
                </Link>
            </div>;
        } else {
            return <div onClick={this.onClick} className={this.titleClassName()}>
                {this.renderCard()}
            </div>;
        }
    };

    titleClassName = () => {
        const {isSelected} = this.props;

        return `menu_item_component_title ${isSelected ? 'menu_item_component__selected_title' : ''}`;
    };

    renderCard = () => {
        const {title} = this.props.menuItem;

        return title;
    };

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
    anchors: PropTypes.array.isRequired,
};