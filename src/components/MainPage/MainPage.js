import React, {Component} from 'react';
import {MenuLoaderComponent} from '../navigation/MenuLoader/MenuLoaderComponent';
import {NavigationSidebarContainer} from '../../containers/navigation/NavigationSidebarContainer';

import styles from './MainPage.module.scss';

export class MainPage extends Component {

    componentDidMount() {
        this.props.uploadPagesData();
    }

    render() {
        return <div className={styles.container}>
            <div>
                {this.renderNavigationMenu()}
            </div>
            <div>
            </div>
        </div>;
    }

    renderNavigationMenu = () => {
        const {isLoading} = this.props;

        if (isLoading) {
            return <MenuLoaderComponent/>
        }

        return <NavigationSidebarContainer
            data={this.props.pagesStructure}
            selectedMenuItem={this.props.selectedMenuItem}/>;
    }
}
