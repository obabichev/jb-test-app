import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MenuAnchorComponent.module.scss';

const cx = classNames.bind(styles);

export class MenuAnchorComponent extends Component {

    render() {
        const {title, url, isSelected} = this.props;

        const className = cx({
            title: true,
            selected: isSelected
        });

        return <div onClick={this.onClick}>
            <a className={className} href={url}>
                {title}
            </a>
        </div>;
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}

MenuAnchorComponent.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};
