import React, {Component} from 'react';
import {NavigationTree} from './NavigationTree/NavigationTree';
import PropTypes from 'prop-types';
import {NavigationSearchContainer} from '../../containers/navigation/NavigationSearchContainer';

import styles from './NavigationSidebarComponent.module.scss';

export class NavigationSidebarComponent extends Component {

    render() {
        return <div className={styles.container}>
            <NavigationSearchContainer/>
            <NavigationTree
                data={this.props.data}
                selectedMenuItem={this.props.selectedMenuItem}
                onSelectItem={this.setCurrentPage}/>
        </div>;
    }

    setCurrentPage = (id) => {
        this.props.setCurrentPage(id);
    }
}

NavigationSidebarComponent.propTypes = {
    data: PropTypes.array.isRequired,
    selectedMenuItem: PropTypes.string
};