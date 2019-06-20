import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MainPageContainer} from '../containers/MainPageContainer';


export class AppRouter extends Component {

    render() {
        return <Router>
            <Route path="/:page?" component={MainPageContainer}/>
        </Router>;
    }

}
