import { compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

import { USER_ACTION_TYPES } from './user/user.action';

const loggermiddleWares = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    next(action);
};

const middleWares = [loggermiddleWares];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);