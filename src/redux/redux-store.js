import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {contactsReducer} from "./reducers/contacts-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let RootReducer = combineReducers({
    contacts: contactsReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));