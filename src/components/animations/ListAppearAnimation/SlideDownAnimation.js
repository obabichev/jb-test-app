import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './SlideDownAnimation.module.scss';

export class SlideDownAnimation extends Component {

    render() {
        return <ReactCSSTransitionGroup
            transitionName={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                leave: styles.leave,
                leaveActive: styles.leaveActive,
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
            {this.props.children}
        </ReactCSSTransitionGroup>;
    }

}
