import { compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const sagaMiddeleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [process.env.NODE_ENV === 'production' && logger, sagaMiddeleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddeleware.run(rootSaga);

export const persistor = persistStore(store);