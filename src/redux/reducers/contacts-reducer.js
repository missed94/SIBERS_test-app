//imports
import {contactsAPI} from '../../API/API';
import {mappingArraysInObject, sortingArrayByABC} from '../../utils/helpers/helpers';


//action types
const SET_CONTACTS = 'SET_CONTACTS';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const IS_EDITING_IN_PROGRESS = 'IS_EDITING_IN_PROGRESS'


let initialState = {
    usersContacts: [],
    editingInProgress: null,
};


//actions by contacts reducer
export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return {
                ...state,
                usersContacts: sortingArrayByABC(action.usersContacts, 'name') //helper function from "utils/helpers/helpers.js"

            };
        }
        case UPDATE_CONTACT: {
            //helper function from "utils/helpers/helpers.js"
            localStorage.setItem("contacts", JSON.stringify(mappingArraysInObject(
                state.usersContacts,
                'id',
                action.contactData.id,
                action.contactData
            )));
            let newContactData = JSON.parse(localStorage.getItem('contacts'));
            return {
                ...state,
                usersContacts: sortingArrayByABC(newContactData, 'name') //helper function from "utils/helpers/helpers.js"

            };
        }
        case IS_EDITING_IN_PROGRESS: {
            return {
                ...state,
                editingInProgress: action.isEditing//
                    ? action.contactId
                    : null,
            };
        }
        default:
            return state;
    }
}


//action creators
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
});


//thunk creators
export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
        dispatch(setContacts(data));
    };
};

export const getContactById = (id) => {
    return async () => {
        let data = await contactsAPI.getContacts();
        return data.filter(item => item.id === id);
    };
};


