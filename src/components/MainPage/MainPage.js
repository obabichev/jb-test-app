import React, {Component} from 'react';

import './MainPage.css';
import {MenuLoaderComponent} from '../navigation/MenuLoader/MenuLoaderComponent';
import {NavigationSidebarComponent} from '../navigation/NavigationSidebarComponent';

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

        return <NavigationSidebarComponent
            data={this.props.pagesStructure}
            selectedMenuItem={this.props.selectedMenuItem}/>;
    }
}
