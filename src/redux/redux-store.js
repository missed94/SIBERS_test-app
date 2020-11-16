//imports
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {contactsReducer} from './reducers/contacts-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'



let RootReducer = combineReducers({
    contacts: contactsReducer,
    form: formReducer,
});

//activation redux-expansion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating store
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;