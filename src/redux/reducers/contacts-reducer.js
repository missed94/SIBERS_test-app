import {contactsAPI} from "../../API/API";
import {mappingArraysInObject} from "../../utils/helpers/helpers";

const SET_CONTACTS = 'SET_CONTACTS';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const IS_EDITING_IN_PROGRESS = 'IS_EDITING_IN_PROGRESS'


let initialState = {
    usersContacts: [],
    editingInProgress: []
};


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return {
                ...state,
                usersContacts: action.usersContacts
            }
        }

        case UPDATE_CONTACT: {
            localStorage.setItem("contacts", JSON.stringify(mappingArraysInObject(
                state.usersContacts,
                'id',
                action.contactData.id,
                action.contactData
            )))
            let newContactData = JSON.parse(localStorage.getItem("contacts"))
            return {
                ...state,
                usersContacts: newContactData
            }


        }

        case IS_EDITING_IN_PROGRESS: {
            return {
                ...state,
                editingInProgress: action.isEditing//
                    ? [...state.editingInProgress, action.contactId]
                    : [...state.editingInProgress.filter(id => id !== action.contactId)]
            }
        }
        default:
            return state;
    }
}


const setContacts = (usersContacts) => ({
    type: SET_CONTACTS,
    usersContacts
});

const updateContact = (contactData) => ({
    type: UPDATE_CONTACT,
    contactData,
});

export const setEditingInProgress = (contactId, isEditing) => ({
    type: IS_EDITING_IN_PROGRESS,
    contactId,
    isEditing
})

export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
        dispatch(setContacts(data))
    }
}

export const getUpdateContact = (data) => {
    return async (dispatch) => {
        dispatch(updateContact(data))
    }
}
