import {contactsAPI} from "../../API/API";
import {mappingArraysInObject} from "../../utils/helpers/helpers";

const SET_CONTACTS = 'SET_CONTACTS';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const IS_EDITING_IN_PROGRESS = 'IS_EDITING_IN_PROGRESS'
const SORT_BY_NAME = 'SORT_BY_NAME'


let initialState = {
    usersContacts: [],
    editingInProgress: null,
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
                    ? action.contactId
                    : null,
            }
        }

        case SORT_BY_NAME: {
            if (!action.directionSort) {
                sessionStorage.setItem("contacts", JSON.stringify(
                    state.usersContacts.sort((a, b) => {
                        return a[action.field] > b[action.field] ? 1 : -1
                    })))
            }
            sessionStorage.setItem("contacts", JSON.stringify(
                state.usersContacts.reverse()))

            let sortData = JSON.parse(sessionStorage.getItem("contacts"))
            return {
                ...state,
                usersContacts: sortData
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

export const updateContact = (contactData) => ({
    type: UPDATE_CONTACT,
    contactData,
});

export const setEditingInProgress = (contactId, isEditing) => ({
    type: IS_EDITING_IN_PROGRESS,
    contactId,
    isEditing
})

export const sortByName = (field, directionSort) => ({
    type: SORT_BY_NAME,
    field,
    directionSort
})

export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
        dispatch(setContacts(data))
    }
}

export const getContactById = (id) => {
    return async () => {
        let data = await contactsAPI.getContacts();
        return data.filter(item => item.id === id);
    }
}


