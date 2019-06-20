import React, {Component} from 'react';

import './MenuAnchorComponent.css';

export class MenuAnchorComponent extends Component {

    render() {
        const {anchor} = this.props;
        return <div key={anchor.id} onClick={this.onAnchorClick(anchor.id)} style={{paddingLeft: 20}}>
            <a className={this.titleClassName()} href={anchor.url + anchor.anchor}>
                {anchor.title}
            </a>
        </div>;
    }

    titleClassName = () => {
        const {isAnchorSelected} = this.props;

        return `menu-anchor-component_title ${isAnchorSelected ? 'menu-anchor-component_title_selected' : ''}`
    };

    onAnchorClick = (anchorId) => () => {
        this.props.setCurrentAnchor(anchorId);
    }
}
