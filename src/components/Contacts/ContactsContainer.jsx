
import React from 'react'
import Contacts from "./Contacts";
import {connect} from "react-redux";
import {
    getContactById,
    getContacts,
    getUpdateContact,
    setEditingInProgress, updateContact
} from "../../redux/reducers/contacts-reducer";


class ContactsContainer extends React.Component {


    componentDidMount() { //жизненный цикл, встроенный объект
        this.props.getContacts()
    }

    render() {
        return (
            <Contacts
                updateContact={this.props.updateContact}
                usersContacts={this.props.usersContacts}
                editingInProgress={this.props.editingInProgress}
                setEditingInProgress={this.props.setEditingInProgress}
                editMode={this.props.editMode}
                getContactById={this.props.getContactById}
            />
        );
    }
}


let mapStateToProps = (state) => {
    return {
        usersContacts: state.contacts.usersContacts,
        editingInProgress: state.contacts.editingInProgress,
        editMode: state.contacts.editMode
    }
}


export default connect(
    mapStateToProps,
    {
        getContacts,
        updateContact,
        /*getUpdateContact,*/
        setEditingInProgress,
        getContactById
    }
)(ContactsContainer);
