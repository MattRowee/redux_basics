import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

import {authActions} from './store/index';
import { useSelector, useDispatch } from "react-redux";




function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth /> }
      <Counter />
    </Fragment>
  );
}

export default App;
