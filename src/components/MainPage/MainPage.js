import React, {Component} from 'react';
import {NavigationTree} from '../NavigationTree/NavigationTree';
import {getPagesListRequest} from '../../service/pagesService';
import {setPagesData} from '../../actions/pages/pages.actions';

export class MainPage extends Component {

    componentDidMount() {
        getPagesListRequest()
            .then(pagesData => setPagesData(pagesData));
    }

    render() {
        return <div>
            <NavigationTree/>
            <div></div>
        </div>;
    }

}
