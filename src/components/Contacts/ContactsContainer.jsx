
import React from 'react'
import Contacts from "./Contacts";
import {connect} from "react-redux";
import {getContacts, getUpdateContact} from "../../redux/reducers/contacts-reducer";


class ContactsContainer extends React.Component {


    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.getContacts()
    }

    render() {
        return (
            <Contacts getUpdateContact={this.props.getUpdateContact} usersContacts={this.props.usersContacts}/>
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
        getContacts,
        getUpdateContact
    }
)(ContactsContainer);
