import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MenuTitleComponent.module.scss';

const cx = classNames.bind(styles);


export class MenuTitleComponent extends Component {

    render() {
        const {title, url, isSelected, isSelectedByKeyboard} = this.props;

        const className = cx({
            button: true,
            selected: isSelected,
            selectedByKeyboard: isSelectedByKeyboard && !isSelected
        });

        if (url) {
            return <Link className={className}
                         to={url}
                         onClick={this.onClick}>
                {title}
            </Link>
        }

        return <div className={className}
                    onClick={this.onClick}>
            {title}
        </div>;
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    };
}

MenuTitleComponent.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
    isSelectedByKeyboard: PropTypes.bool
};
