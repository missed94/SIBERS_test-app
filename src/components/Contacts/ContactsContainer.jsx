
import React from 'react';
import Contacts from './Contacts';
import {connect} from "react-redux";
import {
    getContactById,
    getContacts,
    setEditingInProgress,
    updateContact
} from '../../redux/reducers/contacts-reducer';


class ContactsContainer extends React.Component {


    componentDidMount() {
        this.props.getContacts();
    };

    render() {
        return (
            <Contacts
                updateContact={this.props.updateContact}
                usersContacts={this.props.usersContacts}
                editingInProgress={this.props.editingInProgress}
                setEditingInProgress={this.props.setEditingInProgress}
                getContactById={this.props.getContactById}
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        usersContacts: state.contacts.usersContacts,
        editingInProgress: state.contacts.editingInProgress,
    };
};

export default connect(
    mapStateToProps,
    {
        getContacts,
        updateContact,
        setEditingInProgress,
        getContactById,
    }
)(ContactsContainer);
