
import React from 'react'
import Contacts from "./Contacts";
import {connect} from "react-redux";
import {getContacts} from "../../redux/reducers/contacts-reducer";


class ContactsContainer extends React.Component {


    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.getContacts()
    }

    render() {
        return (
            <Contacts usersContacts={this.props.usersContacts}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        usersContacts: state.contacts.usersContacts
    }
}


export default connect(
    mapStateToProps,
    {
        getContacts
    }
)(ContactsContainer);
