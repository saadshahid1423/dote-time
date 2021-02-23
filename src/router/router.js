import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import First from '../screens/first/first';
import Second from '../screens/second/second';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={First} />
                <Route path="/second" component={Second} />
            </Router>
        )
    }
}

export default AppRouter ;