import React, {Component} from 'react';
import {DebounceInput} from '../../common/DebounceInput/DebounceInput';

import styles from './NavigationSearchComponent.module.scss';

export class NavigationSearchComponent extends Component {

    render() {
        return <div className={styles.container}>
            <DebounceInput
                className={styles.input}
                value={this.props.searchInput}
                onChange={this.onChange}
                placeholder="Search..."/>
        </div>;
    }

    onChange = (value) => {
        this.props.setSearchInput(value)
    }
}
