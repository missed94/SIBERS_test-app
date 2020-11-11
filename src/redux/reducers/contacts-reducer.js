import {contactsAPI} from "../../API/API";

const SET_CONTACTS = 'SET_CONTACTS';


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
        default:
            return state;
    }
}


const setUsers = (usersContacts) => ({
    type: SET_CONTACTS,
    usersContacts
});

export const getContacts = () => {
    return async (dispatch) => {
        let data = await contactsAPI.getContacts()
        dispatch(setUsers(data))
    }
}
