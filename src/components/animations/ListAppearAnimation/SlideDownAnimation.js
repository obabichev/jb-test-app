import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './SlideDownAnimation.module.scss';

export class SlideDownAnimation extends Component {

    render() {
        return <ReactCSSTransitionGroup
            transitionLeave={false}
            transitionName={{
                enter: styles.enter,
                enterActive: styles.enterActive
            }}
            transitionEnterTimeout={500}
        >
            {this.props.children}
        </ReactCSSTransitionGroup>;
    }

}
