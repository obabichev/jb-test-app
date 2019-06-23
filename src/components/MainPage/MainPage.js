import React, {Component} from 'react';

import './MainPage.css';
import {MenuLoaderComponent} from '../navigation/MenuLoader/MenuLoaderComponent';
import {NavigationSidebarContainer} from '../../containers/navigation/NavigationSidebarContainer';

export class MainPage extends Component {

    componentDidMount() {
        this.props.uploadPagesData();
    }

    render() {
        return <div className="main_page_container">
            {this.renderNavigationMenu()}
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
