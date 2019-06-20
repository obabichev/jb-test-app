import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {MainPageContainer} from '../containers/MainPageContainer';


export class AppRouter extends Component {

    // MainPageContainer

    render() {
        return <Router>
            <Route path="/:page?" component={MainPageContainer}/>
        </Router>;
    }

}
