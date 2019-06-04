import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './_components/PrivateRoute';
import Dashboard from './../views/Dashboard';
import Login from './../views/Login';
import ItemList from './../views/ItemList';
import UserList from './../views/UserList';
import Error from './../views/Error';
import AddItem from './../views/AddItem';
import AddUser from './../views/AddUser';

const Router = ({delItem, addItem, fakeData, addUser}) => (
 
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
        delItem={delItem}
        path={['/item_list']}
        component={ItemList}
        redirect='/login'
        availableFor={['admin']}
      />
      <PrivateRoute 
        fakeData={fakeData}
        path={['/add_items']}
        addItem={addItem}
        component={AddItem}
        redirect='/login'
        availableFor={['admin']}
      />
      <PrivateRoute 
        fakeData={fakeData}
        path={['/add_user']}
        addUser={addUser}
        component={AddUser}
        redirect='/login'
        availableFor={['admin']}
      />
      <PrivateRoute 
        delItem={delItem}
        fakeData={fakeData}
        path={['/user_list']}
        component={UserList}
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
