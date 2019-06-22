import React, {Component} from 'react';

import styles from './FadeInAnimation.module.scss';

export class FadeInAnimation extends Component {

    render() {
        return <div className={styles.container}>
            {this.props.children}
        </div>;
    }

}
