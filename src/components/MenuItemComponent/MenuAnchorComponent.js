import React, {Component} from 'react';

export class MenuAnchorComponent extends Component {

    render() {
        const {anchor, isAnchorSelected} = this.props;
        return <div key={anchor.id} onClick={this.onAnchorClick(anchor.id)}>
            <a href={anchor.url + anchor.anchor}>
                {isAnchorSelected ? "SELECTED" : ""} (anchor) {anchor.title}
            </a>
        </div>;
    }

    onAnchorClick = (anchorId) => () => {
        this.props.setCurrentAnchor(anchorId);
    }
}
