import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Note from '../screens/note/note';
import Second from '../screens/second/second';
import First from '../screens/first/first';
import Home from '../screens/home/home';
import Editnote from '../screens/editnote/editnote';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={First} />
                <Route path="/makenote" component={Second} />
                <Route path="/note" component={Note} />
                <Route path="/Home" component={Home} />
                <Route path="/editnote" component={Editnote} />
            </Router>
        )
    }
}

export default AppRouter;