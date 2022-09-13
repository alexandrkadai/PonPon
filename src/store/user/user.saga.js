import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFail } from './user.action';
import {getCurrentUser, creatUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

//if UserAuth changed (usersigned)
export function* getSnapshootFrromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            creatUserDocumentFromAuth, 
            userAuth, 
            additionalDetails 
            );
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        yield put(signInFail(error));
    }
};

//Sign in user when authentication completed calling getcurrent user 
export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return; // if userAuth is null 
            yield call(getSnapshootFrromUserAuth, userAuth);

        }
    
    catch(error){
        yield put(signInFail(error));
    }
};

//Checking(listening) session flow if ok call userAthenticated
export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated );
};

//Exporting saga to the root-saga
export  function* userSagas() {
    yield all([call(onCheckUserSession)]);
};