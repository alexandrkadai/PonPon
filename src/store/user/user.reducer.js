<<<<<<< HEAD
import { USER_ACTION_TYPES } from './user.types';
const INITIAL_STATE = {
=======
<<<<<<< HEAD
 import {USER_ACTION_TYPES} from './user.types';
 const INITIAL_STATE = {
=======
import { USER_ACTION_TYPES } from './user.types';
const INITIAL_STATE = {
>>>>>>> a23c13e96c9db8ad638fc9bbcce347be0dea75ee
>>>>>>> 1030209 (Done Macos)
     currentUser: null
 };

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
            ...state, 
            currentUser: payload
        }
        default:
            return state;
    }
} ;
// Some initial comment 
//New Initial comment
