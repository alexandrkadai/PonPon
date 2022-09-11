import { compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';


const loggerMiddleWares = (store) => (next) => (action) => {
    if(!action.type){
        return next(action);
    }
    next(action);
};

const middleWares = [loggerMiddleWares];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);