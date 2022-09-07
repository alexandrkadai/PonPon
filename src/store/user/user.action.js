import { USER_ACTION_TYPES } from './user.action';
import { createAction } from "../../utils/reducer/reducer.utils";

const setCurrentUser = (user) => 
    createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user);
