import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';

import { onAuthStateChangedListener,creatUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import {createAction} from '../utils/reducer/reducer.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/auththentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';
const App = () => {

  useEffect(() =>{
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            creatUserDocumentFromAuth(user);
        }
    setCurrentUser(user);
    })
    return unsubscribe;
},[]); 

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={ <Home /> } />
        <Route path='shop/*' element={ <Shop /> } />
        <Route path='authentication' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />

      </Route>
    </Routes>
  );
};

export default App;
