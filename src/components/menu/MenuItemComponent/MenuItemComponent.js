import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './MenuItemComponent.css';
import {MenuAnchorContainer} from '../../../containers/menu/MenuAnchorContainer';
import {MenuTitleComponent} from '../MenuTitleComponent/MenuTitleComponent';

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
        const {title, url} = this.props.menuItem;
        const {isSelected} = this.props;

        return <MenuTitleComponent
            title={title}
            url={url}
            onClick={this.onTitleClick}
            isSelected={isSelected}/>;
    };

    renderAnchors = () => {
        const {anchors, isSelected} = this.props;

        if (!isSelected) {
            return null;
        }

        if (anchors.length === 0) {
            return null;
        }

        return <div>
            {anchors.map(this.renderAnchor)}
        </div>;
    };

    renderAnchor = anchor => {
        return <MenuAnchorContainer
            key={anchor.id}
            anchorId={anchor.id}
            title={anchor.title}
            url={anchor.url + anchor.anchor}
            onClick={this.onAnchorClick(anchor.id)}/>;
    };

    onTitleClick = () => {
        const {setExpanded, setCurrentPage} = this.props;
        const {id} = this.props.menuItem;

        setCurrentPage(id);

        if (setExpanded) {
            setExpanded(true);
        }
    };

    onAnchorClick = anchorId => () => {
        this.props.setCurrentAnchor(anchorId);
    };
}

MenuItemComponent.propTypes = {
    menuItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string
    }),
    anchors: PropTypes.array.isRequired,
    isSelected: PropTypes.bool,
    setExpanded: PropTypes.func,
    setCurrentPage: PropTypes.func,
    setCurrentAnchor: PropTypes.func,
};