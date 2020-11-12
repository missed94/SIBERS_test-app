import './App.scss';
import React from 'react'
import ContactsContainer from "./components/Contacts/ContactsContainer";
import {Route} from "react-router-dom";

const App = () => {

    return (
        <div className="App">
            <Route path="/"
                   render={() => <ContactsContainer/>}>
            </Route>
        </div>
    );
}

export default App;
