
import React from 'react'
import Contacts from "./Contacts";
import {connect} from "react-redux";
import {
    getContacts,
    getUpdateContact,
    setEditingInProgress
} from "../../redux/reducers/contacts-reducer";


class ContactsContainer extends React.Component {


    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.getContacts()
    }

    render() {
        return (
            <Contacts
                getUpdateContact={this.props.getUpdateContact}
                usersContacts={this.props.usersContacts}
                editingInProgress={this.props.editingInProgress}
                setEditingInProgress={this.props.setEditingInProgress}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        usersContacts: state.contacts.usersContacts,
        editingInProgress: state.contacts.editingInProgress
    }
}


export default connect(
    mapStateToProps,
    {
        getContacts,
        getUpdateContact,
        setEditingInProgress
    }
)(ContactsContainer);
