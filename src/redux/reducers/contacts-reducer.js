import {contactsAPI} from "../../API/API";

const SET_CONTACTS = 'SET_CONTACTS';


let initialState = {
    contacts: [],
};


export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return {
                ...state,
                contacts: action.contacts
            }
        }
        default:
            return state;
    }
}


const setUsers = (contacts) => ({
    type: SET_CONTACTS,
    contacts
});

export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
            dispatch(setUsers(data))
    }
}
