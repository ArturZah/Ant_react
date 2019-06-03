import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './_components/PrivateRoute';
import Dashboard from './../views/Dashboard';
import Login from './../views/Login';
import ItemList from './../views/ItemList';
import Error from './../views/Error';
import AddItem from './../views/AddItem';

const Router = ({fakeData}) => (
 
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute
        exact
        fakeData={fakeData}
        path={['/', '/dashboard']}
        component={Dashboard}
        redirect='/login'
        availableFor={['admin']}
      />
      <PrivateRoute 
        fakeData={fakeData}
        path={['/item_list']}
        component={ItemList}
        redirect='/login'
        availableFor={['admin']}
      />
      <PrivateRoute 
        fakeData={fakeData}
        path={['/add_items']}
        component={AddItem}
        redirect='/login'
        availableFor={['admin']}
      />
      <Route
        path='*'
        component={Error}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
