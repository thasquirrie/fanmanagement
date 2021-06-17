import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
 userDetailsReducer,
 userLoginReducer,
 userSignupReducer,
 userUpdateDetailsReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
 userLogin: userLoginReducer,
 userSignup: userSignupReducer,
 userDetails: userDetailsReducer,
 userUpdateDetails: userUpdateDetailsReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo'))
 : null;

const initialState = {
 userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
