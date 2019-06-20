import React, {Component} from 'react';

import './MainPage.css';
import {MenuLoaderComponent} from '../menu/MenuLoader/MenuLoaderComponent';
import {NavigationTree} from '../menu/NavigationTree/NavigationTree';

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

        return <NavigationTree
            data={this.props.pagesStructure}
            selectedPageId={this.props.selectedPageId}
            selectedMenuItem={this.props.selectedMenuItem}/>;
    }
}
