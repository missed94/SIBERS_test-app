import './App.scss';
import React from 'react'
import ContactsContainer from "./components/Contacts/ContactsContainer";
import {Route} from "react-router-dom";

const App = () => {

    return (
        <div className="App">
            <div className="App__container">
                <ContactsContainer/>
            </div>
        </div>
    );
}

export default App;
