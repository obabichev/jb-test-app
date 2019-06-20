import React, {Component} from 'react';
import {NavigationTree} from '../NavigationTree/NavigationTree';
import {getPagesListRequest} from '../../service/pagesService';

import './MainPage.css';

export class MainPage extends Component {

    componentDidMount() {
        getPagesListRequest()
            .then((pagesData) => this.props.setPagesData(pagesData));
    }

    render() {
        console.log('[obabichev] MainPage.props', this.props);
        return <div className="main_page_container">
            <NavigationTree data={this.props.pagesStructure}
                            selectedPageId={this.props.selectedPageId}
                            selectedMenuItem={this.props.selectedMenuItem}/>
            <div></div>
        </div>;
    }

}
