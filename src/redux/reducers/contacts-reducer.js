import {contactsAPI} from "../../API/API";
import {mappingArraysInObject} from "../../utils/helpers/helpers";

const SET_CONTACTS = 'SET_CONTACTS';
const UPDATE_CONTACT = 'UPDATE_CONTACT'


let initialState = {
    usersContacts: [],
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
            return {
                ...state,
                usersContacts: mappingArraysInObject(
                    state.usersContacts,
                    'id',
                    action.contactData.id,
                    action.contactData
                )
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

export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
        dispatch(setContacts(data))
    }
}

export const getUpdateContact = (data) => {
    return async (dispatch) => {
        await localStorage.setItem("data", JSON.stringify(data))
        let contactData = await JSON.parse(localStorage.getItem("data"));
        dispatch(updateContact(contactData))
    }
}
