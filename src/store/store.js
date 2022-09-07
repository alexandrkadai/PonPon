import { compose, configureStore, applyMiddelware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

import { USER_ACTION_TYPES } from './user/user.action';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddelware(...middleWares));

export const store = configureStore(rootReducer, undefined, composedEnhancers);