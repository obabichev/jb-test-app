import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './RotateAnimation.module.scss';

// import {RotateAnimation} from '../../animations/RotateAnimation/RotateAnimation';

const cx = classNames.bind(styles);

export class RotateAnimation extends Component {

    render() {
        const {rotated} = this.props;

        const className = cx({
            container: true,
            rotation_enabled: rotated,
            rotation_disabled: !rotated
        });

        return <div className={className}>
            {this.props.children}
        </div>
    }

}

RotateAnimation.propTypes = {
    rotated: PropTypes.bool.isRequired
};