import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './MenuItemComponent.css';

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
            </div>;
        } else {
            return <div onClick={this.onClick} className="menu_item_component_title">
                {selectedMSG} {title}
            </div>;
        }
    }

    onClick = () => {
        const {setExpanded, setCurrentPage} = this.props;
        const {id} = this.props.menuItem;

        setCurrentPage(id);

        if (setExpanded) {
            setExpanded(true);
        }
    }
}

MenuItemComponent.propTypes = {
    menuItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    }),
    isSelected: PropTypes.bool,
    setExpanded: PropTypes.func,
    setCurrentPage: PropTypes.func
};